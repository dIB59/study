// src/pages/preview.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? 'somehitng');

const packages = [
  {
    id: 'price_1PTjg4Ipp2Q29FE5fwt1TVZF',
    name: 'Python for Kids',
    description: ['Ages 9 to 12', 'Great for beginners', 'No prior knowledge required'],
    price: '$3.0'
  },
  {
    id: 'price_1PTjg4Ipp2Q29FE5fwt1TVF',
    name: 'Python for Teens',
    description: ['Ages 13 to 18', 'Intermediate level', 'Basic programming knowledge recommended'],
    price: '$5.0',
    availability: 'Not Available'
  },
];

export default function PreviewPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        priceId: selectedPackage.id,
        plan: selectedPackage.name,
      }),
    });

    const session = await response.json();
    const stripe = await stripePromise;
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-900 text-white">
      <div className="container">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="packages">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package ${selectedPackage.id === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pkg)}
              >
                <h2>{pkg.name}</h2>
                <ul>
                  {pkg.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <p className="price">{pkg.price}</p>
                {pkg.availability && <p className="availability">{pkg.availability}</p>}
              </div>
            ))}
          </div>
          <button type="submit">Checkout</button>
        </form>
      </div>
    </main>
  );
}
