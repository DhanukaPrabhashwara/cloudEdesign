"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

function HeroSection() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCity = searchParams.get('city') || 'city-a';

    const cities = [
        { id: 'city-a', name: 'ABC Ventures - City A' },
        { id: 'city-b', name: 'ABC Ventures - City B' },
        { id: 'city-c', name: 'ABC Ventures - City C' },
        { id: 'city-d', name: 'ABC Ventures - City D' }
    ];

    const handleCityChange = (cityId) => {
        router.push(`/?city=${cityId}`, { scroll: false });
    };

    return (
        <div className="relative h-[500px] w-full">
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat"></div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navigation Panel */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <nav className="flex flex-col md:flex-row gap-16">
                    {cities.map((city, index) => (
                        <button
                            key={index}
                            onClick={() => handleCityChange(city.id)}
                            className={`font-playfair font-medium text-2xl transition-colors duration-300 whitespace-nowrap ${
                                currentCity === city.id
                                    ? "text-[#D4AF37]"
                                    : "text-white hover:text-[#D4AF37]"
                            }`}
                        >
                            {city.name}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default HeroSection;
