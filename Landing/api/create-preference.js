// api/create-preference.js
// Vercel Serverless Function — POST /api/create-preference
// Creates a MercadoPago Checkout Pro preference and returns the init_point.

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('[create-preference] Missing MERCADOPAGO_ACCESS_TOKEN env var');
    return res.status(500).json({ error: 'Server misconfiguration: missing access token' });
  }

  // Determine base URL for back_urls dynamically
  // In production Vercel sets VERCEL_URL; locally you can override with APP_URL
  const appUrl =
    process.env.APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:5173');

  const externalReference = `order_${Date.now()}`;

  const preference = {
    items: [
      {
        title: 'Kit Fonético — Aprende a leer rápido',
        quantity: 1,
        unit_price: 12000,
        currency_id: 'ARS',
      },
    ],
    back_urls: {
      success: `${appUrl}/gracias`,
      failure: `${appUrl}/pago-fallido`,
      pending: `${appUrl}/pago-pendiente`,
    },
    auto_return: 'approved',
    external_reference: externalReference,
    // Sent to webhook so you can match the payment to the order
    notification_url: `${appUrl}/api/mercadopago-webhook`,
    statement_descriptor: 'KIT FONETICO',
  };

  try {
    const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preference),
    });

    if (!mpResponse.ok) {
      const errorBody = await mpResponse.text();
      console.error('[create-preference] MercadoPago API error:', mpResponse.status, errorBody);
      return res.status(mpResponse.status).json({
        error: 'Error creating MercadoPago preference',
        details: errorBody,
      });
    }

    const data = await mpResponse.json();

    // sandbox_init_point is only present for test credentials.
    // Prefer it in test mode so you don't hit real payments during testing.
    return res.status(200).json({
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point ?? null,
      external_reference: externalReference,
      preference_id: data.id,
    });
  } catch (err) {
    console.error('[create-preference] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
