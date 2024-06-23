import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SuccessPage() {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4">
      <Card className="w-full max-w-md p-6 bg-gray-800 shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-semibold mb-6">Payment Successful!</h1>
        <p className="mb-4">Thank you for your purchase, {name}!</p>
        <p className="mb-8">A confirmation email has been sent to {email}.</p>
        <Link href="/">
          <Button className="bg-gray-700 text-white hover:bg-gray-600">Return home</Button>
        </Link>
      </Card>
    </main>
  );
}
