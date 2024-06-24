import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe: Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, priceId, plan } = req.body;
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?name=${name}&email=${email}&plan=${plan}&priceId=${priceId}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        customer_email: email,
      });
      res.status(200).json({ id: session.id });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
