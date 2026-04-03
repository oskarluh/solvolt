export async function onRequestPost(context) {
  const stripe = require('stripe')(context.env.STRIPE_SECRET_KEY);
  
  try {
    const body = await context.request.json();
    
    const session = await stripe.checkout.sessions.create({
      // sama loogika mis Netlify funktsioonis
      payment_method_types: ['card'],
      line_items: body.items,
      mode: 'payment',
      success_url: body.success_url,
      cancel_url: body.cancel_url,
    });
    
    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
