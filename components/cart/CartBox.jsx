'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@/hooks/useClickOutside';  
import { useCart } from '@/contexts/CartContext';           
import { formatPrice } from '@/lib/cartUtils';

// Internal component - only used within CartBox
const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-tl-2xl rounded-br-2xl">
            <Image
                src={item.image || '/placeholder.png'}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-tl-2xl rounded-br-2xl object-cover"
            />
            
            <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onDecrement(item.id)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-tl-2xl rounded-br-2xl hover:bg-gray-100 transition-colors"
                >
                    -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                    onClick={() => onIncrement(item.id)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-tl-2xl rounded-br-2xl hover:bg-gray-100 transition-colors"
                >
                    +
                </button>
                <button
                    onClick={() => onRemove(item.id)}
                    className="ml-2 w-8 h-8 flex items-center justify-center text-red-600 hover:text-white hover:bg-red-600 rounded-tl-2xl rounded-br-2xl transition-colors"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

// Internal component - only used within CartBox
const EmptyCart = () => {
    return (
        <>
            <h2 className="text-2xl font-serif text-[#8A1739] mb-6 text-center">
                No items in Cart
            </h2>

            <div className="w-[180px] h-[100px] bg-gray-200 rounded-tl-2xl rounded-br-2xl mx-auto mb-6"></div>

            <div className="border-t border-gray-300 my-6"></div>

            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-medium">-</span>
                <span className="text-[#8A1739] text-xl font-semibold">
                    {formatPrice(0)}
                </span>
            </div>

            <div className="border-t border-gray-300 mb-6"></div>

            <div className="flex gap-4">
                <button className="flex-1 py-3 border-2 border-[#8A1739] text-[#8A1739] rounded-tl-2xl rounded-br-2xl font-medium hover:bg-gray-50 transition-colors">
                    View Cart
                </button>
                <button className="flex-1 py-3 bg-gray-400 text-white rounded-tl-2xl rounded-br-2xl font-medium cursor-not-allowed">
                    Checkout
                </button>
            </div>
        </>
    );
};

// Main exported component
function CartBox() {
    const {
        cartItems,
        isCartOpen,
        closeCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        getCartTotal,
    } = useCart();

    const cartRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    
    useClickOutside(cartRef, closeCart);

    // Handle animation state
    useEffect(() => {
        if (isCartOpen) {
            setIsAnimating(true);
        }
    }, [isCartOpen]);

    // Handle close with animation
    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => {
            closeCart();
        }, 300);
    };

    if (!isCartOpen) return null;

    const isEmpty = cartItems.length === 0;

    return (
        <>
            {/* Dark Backdrop Overlay with fade animation */}
            <div 
                className={`fixed inset-0 bg-black/30 z-[65] transition-opacity duration-300 ease-in-out ${
                    isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />

            {/* Cart Box with slide and fade animation */}
            <div
                ref={cartRef}
                className={`fixed top-8 right-8 w-[480px] bg-white rounded-tl-2xl rounded-br-2xl shadow-2xl z-[71] border border-gray-200
                    transform transition-all duration-300 ease-in-out ${
                    isAnimating 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-8 opacity-0 scale-95'
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close cart"
                >
                    <span className="text-gray-800 text-xl font-bold">×</span>
                </button>

                {/* Cart Content */}
                <div className="p-8">
                    {isEmpty ? (
                        <EmptyCart />
                    ) : (
                        <>
                            <h2 className="text-2xl font-serif text-[#8A1739] mb-6">
                                Cart Items
                            </h2>

                            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                                {cartItems.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onIncrement={incrementQuantity}
                                        onDecrement={decrementQuantity}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </div>

                            <div className="border-t border-gray-300 my-6"></div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-medium">Total</span>
                                <span className="text-[#8A1739] text-xl font-semibold">
                                    {formatPrice(getCartTotal())}
                                </span>
                            </div>

                            <div className="border-t border-gray-300 mb-6"></div>

                            <div className="flex gap-4">
                                <button className="flex-1 py-3 border-2 border-[#8A1739] text-[#8A1739] rounded-tl-2xl rounded-br-2xl font-medium hover:bg-[#8A1739] hover:text-white transition-colors">
                                    View Cart
                                </button>
                                <button className="flex-1 py-3 bg-[#8A1739] text-white rounded-tl-2xl rounded-br-2xl font-medium hover:bg-[#7A0F2F] transition-colors">
                                    Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CartBox;
