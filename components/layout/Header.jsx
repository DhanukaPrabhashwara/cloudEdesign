"use client";
import React from "react";
import Logo from "@/components/Logo";
import { useRouter, usePathname } from "next/navigation";
import CartButton from "@/components/CartButton";

function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const NavButtons = ({ text, path }) => {
        const isCurrent = pathname === path;

        return (
            <div
                className={`playfair font-medium text-[16px] cursor-pointer hover:text-[#8A1739] transition-colors ${
                    isCurrent ? "text-[#8A1739]" : "text-white"
                }`}
                onClick={() => router.push(path)}
            >
                {text}
            </div>
        );
    };

    return (
        <div className="fixed top-0 left-0 w-full z-[60]">
            {/* Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
            
            {/* Header Content */}
            <div className="relative p-[42px] flex flex-row justify-between items-center">
                <a href={'/'}>
                    <Logo />
                </a>

                <div className="flex flex-row gap-[64px]">
                    <NavButtons text="Home" path="#" />
                    <NavButtons text="About" path="/about" />
                    <NavButtons text="Restaurants" path="/" />
                    <NavButtons text={"Services"} path="/services" />
                    <NavButtons text="Contact" path="/contact" />
                </div>

                <CartButton />
            </div>
        </div>
    );
}

export default Header;
