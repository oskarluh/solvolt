// netlify/functions/create-checkout.js
// ============================================================
// See fail käivitub Netlify serveris (mitte kasutaja brauseris)
// STRIPE_SECRET_KEY on seadistatud Netlify Environment Variables-s
// ============================================================

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Ainult POST päringud
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items } = JSON.parse(event.body);

    if (!items || !items.length) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Ostukorv on tühi' }) };
    }

    // Valideeri et kõigil on price ID
    for (const item of items) {
      if (!item.price || item.price === 'LISA_SIIA') {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Mõnel tootel puudub Stripe Price ID' })
        };
      }
    }

    // Loo Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price: item.price,
        quantity: item.quantity || 1
      })),
      mode: 'payment',
      // Pärast edukat makset suunab edasi.html-i
      success_url: `${process.env.URL}/edasi.html?session_id={CHECKOUT_SESSION_ID}`,
      // Kui klient vajutab "Tagasi", suunab ostukorvi tagasi
      cancel_url: `${process.env.URL}/ostukorv.html`,
      // Stripe saadab kliendile automaatselt kviitungi e-mailile
      payment_intent_data: {
        description: 'Solvolt OÜ tellimus'
      },
      locale: 'et', // Eesti keel Stripe checkout lehel
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url })
    };

  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Makse alustamine ebaõnnestus: ' + error.message })
    };
  }
};
