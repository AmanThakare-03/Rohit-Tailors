const clean = (value, max = 500) =>
  String(value ?? "").replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  try {
    const name = clean(req.body?.name, 80);
    const phone = clean(req.body?.phone, 20).replace(/[^0-9+ -]/g, "");
    const service = clean(req.body?.service, 80);
    const date = clean(req.body?.date, 20);
    const time = clean(req.body?.time, 40);
    const note = clean(req.body?.note, 700) || "No additional requirements";

    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ success: false, error: "Please fill all required fields." });
    }

    if (!/^[0-9+ -]{7,20}$/.test(phone)) {
      return res.status(400).json({ success: false, error: "Please enter a valid mobile number." });
    }

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const shopWhatsApp = (process.env.SHOP_WHATSAPP_NUMBER || "919713709112").replace(/\D/g, "");
    const templateName = clean(process.env.WHATSAPP_TEMPLATE_NAME, 120);
    const templateLanguage = clean(process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en_US", 20);

    if (!accessToken || !phoneNumberId) {
      console.error("Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID");
      return res.status(503).json({
        success: false,
        error: "Appointment WhatsApp service is not configured yet. Add the Meta WhatsApp environment variables in Vercel.",
      });
    }

    const textMessage = `NEW APPOINTMENT - ROHIT TAILOR\n\nCustomer Details\nName: ${name}\nMobile: ${phone}\n\nAppointment Details\nService: ${service}\nDate: ${date}\nPreferred Time: ${time}\n\nRequirements:\n${note}\n\nShop: Rohit Tailor, Chudi Gali, Biaora, Madhya Pradesh`;

    const payload = templateName
      ? {
          messaging_product: "whatsapp",
          to: shopWhatsApp,
          type: "template",
          template: {
            name: templateName,
            language: { code: templateLanguage },
            components: [
              {
                type: "body",
                parameters: [name, phone, service, date, time, note].map((text) => ({ type: "text", text })),
              },
            ],
          },
        }
      : {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: shopWhatsApp,
          type: "text",
          text: { preview_url: false, body: textMessage },
        };

    const metaResponse = await fetch(
      `https://graph.facebook.com/v24.0/${encodeURIComponent(phoneNumberId)}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await metaResponse.json().catch(() => ({}));

    if (!metaResponse.ok) {
      console.error("WhatsApp Cloud API error:", JSON.stringify(data));
      const metaMessage = data?.error?.message;
      return res.status(502).json({
        success: false,
        error: metaMessage
          ? `WhatsApp could not send the appointment: ${metaMessage}`
          : "WhatsApp could not send the appointment. Check the Meta API configuration.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Appointment sent successfully.",
      messageId: data?.messages?.[0]?.id || null,
    });
  } catch (error) {
    console.error("Appointment API error:", error);
    return res.status(500).json({ success: false, error: "Server error while sending the appointment." });
  }
}
