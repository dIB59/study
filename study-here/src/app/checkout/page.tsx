'use client';

import React, { useState, Suspense  } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter, useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

function CheckoutPage() {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    const searchParams = useSearchParams();
    const router = useRouter();
    const product = {
        priceId: searchParams?.get('priceId'),
        productId: searchParams?.get('productId')
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    
    if (!product.priceId || !product.productId) {
        return <Button onClick={() => router.push('/products')}>Please choose a product</Button>;
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    priceId: product.priceId,
                    productId: product.productId,
                }),
            });

            const session = await response.json();

            if (!response.ok) {
                throw new Error(session.message || 'Failed to create checkout session');
            }

            const stripe = await stripePromise;
            if (stripe) {
                await stripe.redirectToCheckout({ sessionId: session.id });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-4">
            <Card className="w-full max-w-md p-6 bg-gray-800 shadow-md rounded-lg">
                <h1 className="text-center text-2xl font-semibold mb-6">Checkout</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full bg-gray-700 text-white border-gray-600 focus:ring-gray-500 focus:border-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full bg-gray-700 text-white border-gray-600 focus:ring-gray-500 focus:border-gray-500"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-gray-700 text-white hover:bg-gray-600" disabled={loading}>
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </form>
            </Card>
        </main>
    );
}

const CheckoutPageWrapper = () => (
    <Suspense fallback={<div> loading </div>}>
        <CheckoutPage />
    </Suspense>
);

export default CheckoutPageWrapper;
