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

    const siteUrl = (env.PUBLIC_SITE_URL || 'https://solvolt.ee').replace(/\/$/, '');

    const form = new URLSearchParams();

    // Põhiseaded
    form.set('mode', 'payment');
    form.set('locale', 'et');
    form.set('success_url', `${siteUrl}/edasi.html?session_id={CHECKOUT_SESSION_ID}`);
    form.set('cancel_url', `${siteUrl}/ostukorv.html`);
    form.set('payment_intent_data[description]', 'Solvolt OÜ tellimus');

    // Küsi kliendi e-maili checkoutis
    form.set('billing_address_collection', 'auto');

    // Näita tarne / arve märkust
    form.set(
      'custom_text[submit][message]',
      'Tarne lepitakse pärast makset eraldi kokku. Kui ostad ettevõttele, lisa allpool firma nimi ja KMKR number, et saaksime väljastada ametliku arve.'
    );

    // Firma nimi
    form.set('custom_fields[0][key]', 'company_name');
    form.set('custom_fields[0][label][type]', 'custom');
    form.set('custom_fields[0][label][custom]', 'Firma nimi');
    form.set('custom_fields[0][type]', 'text');
    form.set('custom_fields[0][text][maximum_length]', '100');
    form.set('custom_fields[0][optional]', 'true');

    // KMKR number
    form.set('custom_fields[1][key]', 'vat_number');
    form.set('custom_fields[1][label][type]', 'custom');
    form.set('custom_fields[1][label][custom]', 'KMKR number');
    form.set('custom_fields[1][type]', 'text');
    form.set('custom_fields[1][text][maximum_length]', '40');
    form.set('custom_fields[1][optional]', 'true');

    // Soovi korral võid lisada ka märkuste välja
    form.set('custom_fields[2][key]', 'extra_info');
    form.set('custom_fields[2][label][type]', 'custom');
    form.set('custom_fields[2][label][custom]', 'Lisainfo tellimuse kohta');
    form.set('custom_fields[2][type]', 'text');
    form.set('custom_fields[2][text][maximum_length]', '200');
    form.set('custom_fields[2][optional]', 'true');

    // Tooted
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
          error: stripeData?.error?.message || 'Makse alustamine ebaõnnestus'
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
