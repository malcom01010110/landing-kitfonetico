// api/mercadopago-webhook.js
// Vercel Serverless Function — POST /api/mercadopago-webhook
//
// MercadoPago sends a notification here whenever a payment status changes.
// For now we just acknowledge the request with 200 OK.
//
// TODO: When ready to send access emails on approved payments, implement the
// logic inside the "payment" topic block below. You'll need to:
//   1. Fetch the payment details from the MercadoPago API using the payment ID.
//   2. Check payment.status === 'approved'.
//   3. Retrieve the buyer's email from payment.payer.email.
//   4. Send them the access link / digital product via an email service (e.g. Resend, SendGrid).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { type, data } = req.body ?? {};

    console.log('[mercadopago-webhook] Received notification:', { type, data });

    if (type === 'payment') {
      const paymentId = data?.id;
      console.log('[mercadopago-webhook] Payment ID:', paymentId);

      // TODO: fetch payment details and send access email when status === 'approved'
      // const payment = await fetchPayment(paymentId);
      // if (payment.status === 'approved') { ... sendAccessEmail(payment.payer.email) }
    }

    // Always respond 200 so MercadoPago doesn't keep retrying
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[mercadopago-webhook] Error processing webhook:', err);
    // Still return 200 to avoid infinite retries from MercadoPago
    return res.status(200).json({ received: true });
  }
}
