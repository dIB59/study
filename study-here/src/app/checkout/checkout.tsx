import React, { FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/custom/Spinner';

export const CheckoutForm = ({ onSubmit, loading }: { onSubmit: Function, loading: boolean }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({ name, email });
    };

    return (
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
                    <LoadingSpinner />
                ) : (
                    'Submit'
                )}
            </Button>
        </form>
    );
};

