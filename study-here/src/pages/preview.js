// src/pages/preview.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

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
      <style jsx global>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          background: #2a2a2a; /* Dark grey background */
        }

        main {
          min-height: 100vh; /* Full viewport height */
          display: flex;
          align-items: center; /* Center align items vertically */
          justify-content: center; /* Center align items horizontally */
        }
      `}</style>
      <style jsx>{`
        .container {
          max-width: 800px;
          padding: 2em;
          background: #333; /* Darker shade of grey */
          border: 2px solid #444;
          border-radius: 8px;
          margin: auto;
        }
        h1 {
          text-align: center;
          color: #fff;
          margin-bottom: 1em;
        }
        .form-fields {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1em;
          margin-left: 1em;

        }
        .field {
          flex: 1;
          margin-right: 2em;
        }
        .field:last-child {
          margin-right: 1 em;
        }
        label {
          display: block;
          margin-bottom: 0.5em;
          color: #fff;
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
          border: 2px solid #444;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          background: #444; /* Different shade of grey */
          color: #fff;
          transition: background 0.3s ease, border-color 0.3s ease;
          margin-top: 3em;

        }
        .package h2 {
          margin: 0 0 0.5em 0;
        }
        .package ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 0.5em 0;
        }
        .package ul li {
          margin-bottom: 0.5em;
        }
        .package .price {
          font-weight: bold;
          margin-top: 0.5em;
        }
        .package .availability {
          color: red;
          margin-top: 0.5em;
        }
        .package.selected {
          border-color: #f6f7f7;
          background: ;
        }
        button {
          display: block;
          width: 50%;
          padding: 0.75em;
          background: #424848;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1em;
          cursor: pointer;
          margin-left: 8em;
          margin-top: 5em;

          
        }
        button:hover {
          background: #54545b;
          border-color: #f6f7f7;
                    border-radius: 4px;

        }
      `}</style>
    </main>
  );
}
