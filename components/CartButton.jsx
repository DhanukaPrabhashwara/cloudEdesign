'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';     // ⬅️ Root level
import CartBox from '@/components/cart/CartBox';      // ⬅️ Root level

function CartButton() {
    const { isCartOpen, toggleCart, getCartCount } = useCart();
    const itemCount = getCartCount();

    return (
        <>
            {!isCartOpen && (
                <button
                    onClick={toggleCart}
                    className="cursor-pointer flex flex-row gap-[8px] bg-[#8A1739] py-[8px] px-[24px] rounded-tl-2xl rounded-br-2xl hover:bg-[#7A0F2F] transition-colors"
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
            )}

            <CartBox />
        </>
    );
}

export default CartButton;
