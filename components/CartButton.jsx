'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import CartBox from '@/components/cart/CartBox';

function CartButton() {
    const { isCartOpen, toggleCart, getCartCount } = useCart();
    const itemCount = getCartCount();

    return (
        <>
            {/* Cart Button - Keep in layout but invisible when cart is open */}
            <button
                onClick={toggleCart}
                className={`cursor-pointer flex flex-row gap-[8px] bg-[#8A1739] py-[8px] px-[24px] rounded-tl-2xl rounded-br-2xl hover:bg-[#7A0F2F] transition-colors ${
                    isCartOpen ? 'invisible' : 'visible'
                }`}
                aria-label="Open shopping cart"
            >
                <Image
                    src="/cart.png"
                    alt="cart"
                    width={20}
                    height={20}
                />
                <span className="poppins font-medium text-[16px] text-white">
                    {itemCount} Items
                </span>
            </button>

            {/* Cart Box Component */}
            <CartBox />
        </>
    );
}

export default CartButton;
