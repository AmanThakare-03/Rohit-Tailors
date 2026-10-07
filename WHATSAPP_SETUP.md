# Rohit Tailor – Automatic WhatsApp Appointment Setup

The website appointment form is already connected to `/api/appointment`.

## Vercel environment variables
In Vercel: Project -> Settings -> Environment Variables, add:

- `WHATSAPP_ACCESS_TOKEN` = permanent Meta WhatsApp Cloud API access token
- `WHATSAPP_PHONE_NUMBER_ID` = sender phone number ID from Meta WhatsApp Manager
- `SHOP_WHATSAPP_NUMBER` = `919713709112`

Then redeploy the project.

## Production template (recommended)
Business-initiated WhatsApp messages can require an approved template. Create a template in WhatsApp Manager with six BODY variables in this order:

1. Customer name
2. Customer phone
3. Service
4. Date
5. Time
6. Requirements

Then add:

- `WHATSAPP_TEMPLATE_NAME` = exact approved template name
- `WHATSAPP_TEMPLATE_LANGUAGE` = template language code, e.g. `en_US`

If `WHATSAPP_TEMPLATE_NAME` is empty, the API sends a normal text message, which only works when Meta permits free-form messaging for that recipient/conversation window.

## Local development
`npm run dev` only starts Vite, so Vercel serverless `/api` routes are not served by plain Vite. For end-to-end local API testing use Vercel CLI (`vercel dev`) or deploy to Vercel.

## Security
Never put the Meta access token in `src/`, React code, or any variable beginning with `VITE_`. Keep it only in server-side environment variables.
