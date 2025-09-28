"use client";

import React, { useState } from "react";

function HeroSection() {
    const [selectedCity, setSelectedCity] = useState("ABC Ventures-City A");

    const cities = [
        "ABC Ventures-City A",
        "ABC Ventures-City B", 
        "ABC Ventures-City C",
        "ABC Ventures-City D"
    ];

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
                            onClick={() => setSelectedCity(city)}
                            className={`font-playfair font-medium text-2xl transition-colors duration-300 whitespace-nowrap ${
                                selectedCity === city
                                    ? "text-[#D4AF37]"
                                    : "text-white hover:text-[#D4AF37]"
                            }`}
                        >
                            {city}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default HeroSection;