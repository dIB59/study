// src/pages/success.js
import React from 'react';
import { useRouter } from 'next/router';

export default function SuccessPage() {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <div className="container">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase, {name}!</p>
      <p>A confirmation email has been sent to {email}.</p>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1em;
          background: #f9f9f9;
          border-radius: 8px;
          text-align: center;
        }
        h1 {
          color: #28a745;
        }
        p {
          color: #333;
        }
      `}</style>
    </div>
  );
}
