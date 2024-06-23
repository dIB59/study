'use client'

import React, { Suspense, useState } from 'react';
import { Card } from '@/components/ui/card';
import { useRouter, useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import { CheckoutForm } from './checkout';
import { LoadingSpinner } from '@/components/ui/custom/Spinner';


const CheckoutPage = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    const searchParams = useSearchParams();
    const router = useRouter();
    const product = {
        priceId: searchParams?.get('priceId'),
        productId: searchParams?.get('productId')
    };
    const [loading, setLoading] = useState(false);

    if (!product.priceId || !product.productId) {
        return <Button onClick={() => router.push('/products')}>Please choose a product</Button>;
    }

    const handleSubmit = async ( name: string, email: string) => {
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
                <CheckoutForm onSubmit={handleSubmit} loading={loading} />
            </Card>
        </main>
    );
};

const CheckoutPageWrapper = () => {
    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <CheckoutPage />
        </Suspense>
    );
}

export default CheckoutPageWrapper;
