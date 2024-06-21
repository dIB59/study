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
    </div>
  );
}
