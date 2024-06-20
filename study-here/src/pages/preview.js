// src/pages/preview.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const packages = [
  { id: 'price_1PTjg4Ipp2Q29FE5fwt1TVZF', name: 'Python for Kids',price: '  $3.0' },
  { id: 'price_1PTjg4Ipp2Q29FE5fwt1TVF', name: 'Python for Teens' ,price: '  $5.0'},
];

export default function PreviewPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const handleSubmit = async (event) => {
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
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="packages">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package ${selectedPackage.id === pkg.id ? 'selected' : ''}`}
              onClick={() => setSelectedPackage(pkg)}
            >
              {pkg.name}
              {pkg.price}
            </div>
          ))}
        </div>
        <button type="submit">Checkout</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1em;
          background: #f9f9f9;
          border-radius: 8px;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .field {
          margin-bottom: 1em;
        }
        label {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
        }
        input {
          width: 100%;
          padding: 0.5em;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .packages {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1em;
        }
        .package {
          flex: 1;
          padding: 1em;
          margin: 0 0.5em;
          border: 2px solid #ccc;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
        }
        .package.selected {
          border-color: #556cd6;
          background: #eef;
        }
        button {
          display: block;
          width: 100%;
          padding: 0.75em;
          background: #556cd6;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1em;
          cursor: pointer;
        }
        button:hover {
          background: #4455a0;
        }
      `}</style>
    </div>
  );
}
