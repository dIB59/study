// src/pages/success.js
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SuccessPage() {
  const router = useRouter();
  const { name, email, plan, priceId } = router.query;
   
  return (
    <div className="container">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase, {name}!</p>
      <p>A confirmation email has been sent to {email}.</p>
      <p>You have purchased the <strong>{plan}</strong> plan.</p>
      <button>
        <Link href="/">
        <p>Return home</p>
        </Link>
      </button>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1em;
          background: #f9f9f9;
          border-radius: 4px;
          text-align: center;
        }
        h1 {
          color: #28a745;
        }
        p {
          color: #333;
        }
        button {
          display: inline-block;
          padding: 0.75em 1.0em;
          margin-top: 1em;
          background: #559cd6;
          color: white;
          border: none;
          border-radius: 2px;
          font-size: 1em;
          cursor: pointer;
          text-decoration: none;
        }
        button:hover {
          background: #4455a0;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
