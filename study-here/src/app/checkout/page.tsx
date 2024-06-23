'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js';

export default function CheckoutPage() {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    const searchParams = useSearchParams()
    const router = useRouter(); 
    const product = {
        priceId: searchParams?.get('priceId'),
        id: searchParams?.get('productId')
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    console.log(product);
    if (!product.priceId || !product.id) {
        return <Button onClick={() => router.push('/products')}>Please choose a product</Button>
    }

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
            priceId: product.id,
            productId: product.priceId,
          }),
        });

        console.log(response);
    
        const session = await response.json();
        const stripe = await stripePromise.catch((error) => {
            console.error('Error:', error)
            });
        console.log(session.id);
        stripe?.redirectToCheckout({ sessionId: session.id });
      };
    
    return (
        <main>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <Input
                    id="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
            </form>
        </main>
    );
    }