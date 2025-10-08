'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';

export default function CartContent() {
    const router = useRouter();
    const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (itemId, field, value) => {
        setQuantities(prev => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                [field]: value
            }
        }));
    };

    const handleDateChange = (itemId, date) => {
        // Update cart item date
        updateCartItemQuantity(itemId, { date });
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const handleCheckout = () => {
        router.push('/checkout');
    };

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-playfair font-bold text-[#8A1739] mb-4">
                        Your Cart is Empty
                    </h2>
                    <p className="text-gray-600 mb-8">Add some delicious meals to get started!</p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-3 bg-[#8A1739] text-white rounded-tl-2xl rounded-br-2xl hover:bg-[#8A1739]/90 transition-colors"
                    >
                        Browse Meals
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Go Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-[#8A1739] mb-6 hover:text-[#8A1739]/80 transition-colors"
            >
                <span>&lt;</span>
                <span>Go Back</span>
            </button>

            {/* Cart Items */}
            <div className="space-y-6">
                {cartItems.map((item, index) => (
                    <div key={item.id}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            {/* Item Image and Title - 3 columns */}
                            <div className="lg:col-span-3 flex gap-4">
                                <div className="relative w-24 h-24 rounded-tl-2xl rounded-br-2xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-playfair font-bold text-[#8A1739]">
                                        {item.details?.category || 'Breakfast'}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {String(item.details?.adults || 1).padStart(2, '0')} Adults x USD {item.price / (item.details?.adults || 1)}
                                    </p>
                                </div>
                            </div>

                            {/* Ticket Type & Quantity - 4 columns */}
                            <div className="lg:col-span-4">
                                <p className="text-sm text-gray-600 mb-2">*Ticket Type & Quantity</p>
                                <div className="flex items-center gap-3">
                                    {/* Adults Ticket */}
                                    <div className="flex-1 border-2 border-gray-300 rounded-tl-2xl rounded-br-2xl p-3">
                                        <p className="text-center font-medium text-sm mb-2 text-[#D4AF37]">
                                            Adults Ticket
                                        </p>
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 'adults', Math.max(1, (quantities[item.id]?.adults || item.details?.adults || 1) - 1))}
                                                className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="text-lg font-bold w-8 text-center">
                                                {quantities[item.id]?.adults || item.details?.adults || 1}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 'adults', (quantities[item.id]?.adults || item.details?.adults || 1) + 1)}
                                                className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Date - 3 columns */}
                            <div className="lg:col-span-3">
                                <p className="text-sm text-gray-600 mb-2">*Date</p>
                                <input
                                    type="date"
                                    value={item.details?.date || ''}
                                    onChange={(e) => handleDateChange(item.id, e.target.value)}
                                    className="w-full p-2 border-2 border-gray-300 rounded-tl-2xl rounded-br-2xl focus:outline-none focus:border-[#8A1739] text-sm"
                                />
                            </div>

                            {/* Remove Button - 2 columns */}
                            <div className="lg:col-span-2 flex flex-col items-end">
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="text-[#8A1739] hover:text-[#8A1739]/80 transition-colors"
                                >
                                    <div className="flex flex-col items-center">
                                        <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <span className="text-sm">Remove</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        {index < cartItems.length - 1 && (
                            <hr className="my-6 border-gray-300" />
                        )}
                    </div>
                ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-12 border-t-2 border-gray-300 pt-8">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-playfair font-bold text-gray-800">Total</span>
                    <span className="text-3xl font-playfair font-bold text-gray-800">
                        - USD {calculateTotal()}
                    </span>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleCheckout}
                        className="px-12 py-3 bg-[#8A1739] text-white rounded-tl-2xl rounded-br-2xl font-playfair font-medium text-lg hover:bg-[#8A1739]/90 transition-colors"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
