import React, { useState } from "react";

const SHOP = {
  name: "Rohit Tailor",
  phone: "7947134364",
  whatsapp: "9713709112",
  address: "Chudi Gali, Biaora, Madhya Pradesh",
};

const services = [
  {
    title: "Suit Stitching",
    subtitle: "Formal & Business",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sherwani",
    subtitle: "Wedding & Special",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Indo Western",
    subtitle: "Modern & Stylish",
    image:
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Shirt Stitching",
    subtitle: "Casual & Formal",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Trouser Stitching",
    subtitle: "Perfect Fit",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=85",
  },
];

const designs = [
  {
    title: "Classic Suit",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Wedding Wear",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Formal Wear",
    image:
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Premium Suit",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85",
  },
];

export default function RohitTailor() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const callShop = () => {
    window.location.href = `tel:+91${SHOP.phone}`;
  };

  const openWhatsApp = () => {
    const message =
      "Hello Rohit Tailor, I want to know more about your tailoring services.";

    window.open(
      `https://wa.me/91${SHOP.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#111827]">
      {/* TOP BAR */}
      <div className="hidden bg-[#050F18] text-white md:block">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-8 py-2 text-[11px]">
          <p className="text-white/60">📍 {SHOP.address}</p>

          <div className="flex gap-6">
            <a href={`tel:+91${SHOP.phone}`}>
              ☎ +91 {SHOP.phone}
            </a>

            <button onClick={openWhatsApp} className="text-[#D7A64A]">
              WhatsApp: +91 {SHOP.whatsapp}
            </button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1450px] items-center justify-between px-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071827] text-xl text-[#D7A64A]">
              ✂
            </div>

            <div>
              <h1 className="font-serif text-xl font-bold uppercase text-[#071827] md:text-2xl">
                Rohit Tailor
              </h1>

              <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#B27B34]">
                Men&apos;s Custom Tailoring
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#designs">Designs</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            onClick={() => setAppointmentOpen(true)}
            className="hidden bg-[#D7A64A] px-5 py-3 text-xs font-bold text-[#071827] md:block"
          >
            Book Appointment
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span className="h-[2px] w-6 bg-[#071827]" />
            <span className="h-[2px] w-6 bg-[#071827]" />
            <span className="h-[2px] w-6 bg-[#071827]" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-5 font-semibold">
              {["home", "services", "about", "designs", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="capitalize"
                  >
                    {item}
                  </a>
                )
              )}

              <button
                onClick={() => {
                  setMenuOpen(false);
                  setAppointmentOpen(true);
                }}
                className="bg-[#D7A64A] px-5 py-3 text-left"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[620px] overflow-hidden bg-[#07131F]"
      >
        <img
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=2000&q=90"
          alt="Men's tailoring"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1450px] items-center px-6 lg:px-16">
          <div className="max-w-[660px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#E0B35C]">
              Men&apos;s Custom Tailoring • Biaora
            </p>

            <h2 className="font-serif text-5xl font-bold leading-none text-white md:text-7xl lg:text-[80px]">
              Perfect Fit.
              <br />
              <span className="text-[#E0B35C]">Made for You.</span>
            </h2>

            <p className="mt-7 max-w-[550px] text-[16px] leading-7 text-white/70">
              Welcome to Rohit Tailor, Chudi Gali, Biaora. Quality
              men&apos;s stitching with attention to fitting, comfort
              and style.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setAppointmentOpen(true)}
                className="bg-[#D7A64A] px-6 py-4 text-sm font-bold text-[#071827]"
              >
                Book Appointment →
              </button>

              <button
                onClick={callShop}
                className="border border-white/60 px-6 py-4 text-sm font-bold text-white"
              >
                ☎ Call Now
              </button>

              <button
                onClick={openWhatsApp}
                className="bg-[#25D366] px-6 py-4 text-sm font-bold text-white"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#071827] text-white">
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 md:grid-cols-4">
          {[
            ["✂", "Perfect Fitting", "Tailored for You"],
            ["◇", "Premium Finish", "Quality Stitching"],
            ["♙", "Expert Tailoring", "Skilled Craftsmanship"],
            ["◷", "On-Time Delivery", "Reliable Service"],
          ].map(([icon, title, subtitle]) => (
            <div
              key={title}
              className="flex items-center justify-center gap-4 border border-white/10 px-3 py-7"
            >
              <span className="text-3xl text-[#D7A64A]">{icon}</span>

              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-[10px] text-white/50">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-20">
        <SectionTitle small="Our Services" title="Men's Tailoring Services" />

        <div className="mx-auto mt-10 grid max-w-[1350px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden bg-white shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-[190px] w-full object-cover md:h-[250px]"
              />

              <div className="p-5 text-center">
                <h3 className="font-serif text-lg font-bold">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {service.subtitle}
                </p>

                <button
                  onClick={() => setAppointmentOpen(true)}
                  className="mt-4 text-[#B27B34]"
                >
                  Book →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="mx-auto grid max-w-[1450px] lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
            alt="Tailoring"
            className="h-full min-h-[450px] w-full object-cover"
          />

          <div className="flex items-center bg-[#F3E9D7] px-8 py-16 lg:px-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A66F26]">
                About Rohit Tailor
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-[#071827] md:text-5xl">
                Fine Stitching.
                <br />
                Perfect Fitting.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-gray-600">
                Rohit Tailor provides men&apos;s custom tailoring in
                Biaora with a focus on fitting, comfort and clean
                finishing. From everyday formal wear to wedding
                clothing, every garment is stitched according to your
                measurements and style.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Custom Stitching",
                  "Personalized Fitting",
                  "Quality Finishing",
                  "Traditional Wear",
                ].map((item) => (
                  <p key={item} className="font-semibold">
                    <span className="mr-2 text-[#B27B34]">✓</span>
                    {item}
                  </p>
                ))}
              </div>

              <button
                onClick={() => setAppointmentOpen(true)}
                className="mt-8 bg-[#071827] px-6 py-4 text-sm font-bold text-white"
              >
                Book Appointment →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071827] px-5 py-20 text-white">
        <SectionTitle
          dark
          small="Simple Process"
          title="From Measurement to Perfect Fit"
        />

        <div className="mx-auto mt-12 grid max-w-[1250px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Process number="01" title="Book Appointment">
            Submit your appointment request online.
          </Process>

          <Process number="02" title="Measurement">
            Visit the shop for accurate measurements.
          </Process>

          <Process number="03" title="Stitching">
            Your outfit is carefully stitched.
          </Process>

          <Process number="04" title="Final Fitting">
            Final fitting and finishing before delivery.
          </Process>
        </div>
      </section>

      {/* DESIGNS */}
      <section id="designs" className="px-5 py-20">
        <SectionTitle small="Style Inspiration" title="Our Latest Designs" />

        <div className="mx-auto mt-10 grid max-w-[1350px] grid-cols-2 gap-4 md:grid-cols-4">
          {designs.map((design) => (
            <article
              key={design.title}
              className="relative h-[280px] overflow-hidden md:h-[400px]"
            >
              <img
                src={design.image}
                alt={design.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 pt-20">
                <h3 className="font-serif text-xl font-bold text-white">
                  {design.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-[#E1B35B] px-5 py-14">
        <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              Rohit Tailor • Biaora
            </p>

            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Get Your Perfect Outfit Today
            </h2>

            <p className="mt-2 text-sm">📍 {SHOP.address}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={callShop}
              className="bg-[#071827] px-6 py-4 font-bold text-white"
            >
              ☎ Call Now
            </button>

            <button
              onClick={() => setAppointmentOpen(true)}
              className="border-2 border-[#071827] px-6 py-4 font-bold"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050F18] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-[1250px] gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              Rohit Tailor
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#D7A64A]">
              Men&apos;s Custom Tailoring
            </p>

            <p className="mt-5 text-sm text-white/50">
              Quality men&apos;s stitching and personalized fitting in
              Biaora.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#D7A64A]">Contact</h4>

            <div className="mt-4 space-y-3 text-sm text-white/60">
              <p>☎ +91 {SHOP.phone}</p>
              <p>WhatsApp: +91 {SHOP.whatsapp}</p>
              <p>📍 {SHOP.address}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#D7A64A]">
              Book Your Appointment
            </h4>

            <button
              onClick={() => setAppointmentOpen(true)}
              className="mt-5 bg-[#D7A64A] px-6 py-3 text-sm font-bold text-[#071827]"
            >
              Book Now
            </button>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Rohit Tailor. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] font-bold text-white shadow-xl"
      >
        WA
      </button>

      {/* APPOINTMENT FORM */}
      {appointmentOpen && (
        <AppointmentModal
          onClose={() => setAppointmentOpen(false)}
        />
      )}
    </div>
  );
}

/* =========================================================
   APPOINTMENT FORM
========================================================= */

function AppointmentModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Appointment failed.");
      }

      setStatus("success");

      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        note: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Appointment submit nahi hua. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="relative max-h-[94vh] w-full max-w-[620px] overflow-y-auto bg-white shadow-2xl">
        <div className="relative bg-[#071827] px-6 py-6 text-white md:px-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl"
          >
            ×
          </button>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D7A64A]">
            Rohit Tailor • Biaora
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold">
            Book Appointment
          </h2>

          <p className="mt-2 text-sm text-white/60">
            Fill your details and submit your appointment request.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>

            <h3 className="mt-5 font-serif text-2xl font-bold text-[#071827]">
              Appointment Submitted!
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Your appointment details have been submitted successfully.
            </p>

            <button
              onClick={onClose}
              className="mt-6 bg-[#071827] px-8 py-3 text-sm font-bold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Your Name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Enter your name"
                required
              />

              <Input
                label="Mobile Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                placeholder="Enter mobile number"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase">
                Select Service *
              </label>

              <select
                name="service"
                value={form.service}
                onChange={updateField}
                required
                className="w-full border border-gray-300 bg-white px-4 py-3.5 outline-none focus:border-[#D7A64A]"
              >
                <option value="">Choose Service</option>
                <option>Suit Stitching</option>
                <option>Shirt Stitching</option>
                <option>Trouser Stitching</option>
                <option>Sherwani Stitching</option>
                <option>Indo Western</option>
                <option>Kurta Pajama</option>
                <option>Alteration / Fitting</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Appointment Date"
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={updateField}
                required
              />

              <div>
                <label className="mb-2 block text-xs font-bold uppercase">
                  Preferred Time *
                </label>

                <select
                  name="time"
                  value={form.time}
                  onChange={updateField}
                  required
                  className="w-full border border-gray-300 bg-white px-4 py-3.5 outline-none focus:border-[#D7A64A]"
                >
                  <option value="">Select Time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase">
                Your Requirements
              </label>

              <textarea
                name="note"
                value={form.note}
                onChange={updateField}
                rows="4"
                placeholder="Example: Wedding suit, black colour, slim fitting..."
                className="w-full resize-none border border-gray-300 px-4 py-3 outline-none focus:border-[#D7A64A]"
              />
            </div>

            {status === "error" && (
              <div className="border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700">
                {errorMessage || "Appointment submit nahi hua. Please try again."}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D7A64A] px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#071827] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase">
        {label} {required && "*"}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 px-4 py-3.5 outline-none focus:border-[#D7A64A]"
      />
    </div>
  );
}

function Process({ number, title, children }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-6">
      <p className="font-serif text-3xl font-bold text-[#D7A64A]">
        {number}
      </p>

      <h3 className="mt-4 font-serif text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/50">
        {children}
      </p>
    </div>
  );
}

function SectionTitle({ small, title, dark = false }) {
  return (
    <div className="text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#B27B34]">
        {small}
      </p>

      <h2
        className={`mt-3 font-serif text-3xl font-bold md:text-4xl ${
          dark ? "text-white" : "text-[#071827]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}