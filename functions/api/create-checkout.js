export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const body = await request.json();
    const { items } = body || {};

    if (!items || !Array.isArray(items) || items.length === 0) {
      return json({ error: 'Ostukorv on tühi' }, 400);
    }

    for (const item of items) {
      if (!item.price || item.price === 'LISA_SIIA') {
        return json({ error: 'Mõnel tootel puudub Stripe Price ID' }, 400);
      }
    }

    if (!env.STRIPE_SECRET_KEY) {
      return json({ error: 'STRIPE_SECRET_KEY puudub Cloudflare secrets alt' }, 500);
    }

    if (!env.PUBLIC_SITE_URL) {
      return json({ error: 'PUBLIC_SITE_URL puudub Cloudflare variables/secrets alt' }, 500);
    }

    const form = new URLSearchParams();

    form.set('mode', 'payment');
    form.set('locale', 'et');
    form.set('success_url', `${env.PUBLIC_SITE_URL}/edasi.html?session_id={CHECKOUT_SESSION_ID}`);
    form.set('cancel_url', `${env.PUBLIC_SITE_URL}/ostukorv.html`);
    form.set('payment_intent_data[description]', 'Solvolt OÜ tellimus');

    items.forEach((item, index) => {
      form.set(`line_items[${index}][price]`, item.price);
      form.set(`line_items[${index}][quantity]`, String(item.quantity || 1));
    });

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: form.toString()
    });

    const stripeData = await stripeRes.json();

    if (!stripeRes.ok) {
      console.error('Stripe error:', stripeData);
      return json(
        {
          error:
            stripeData?.error?.message ||
            'Makse alustamine ebaõnnestus'
        },
        500
      );
    }

    return json({ url: stripeData.url }, 200);
  } catch (error) {
    console.error('Checkout function error:', error);
    return json(
      { error: 'Makse alustamine ebaõnnestus: ' + error.message },
      500
    );
  }
}

export async function onRequest(context) {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      Allow: 'POST'
    }
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
