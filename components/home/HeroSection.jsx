"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function HeroSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCity = searchParams.get("city") || "city-a";

  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch("/api/cities");
        if (res.ok) {
          const data = await res.json();
          setCities(data);
        } else {
          console.error("Failed to fetch cities:", res.status);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }
    fetchCities();
  }, []);

  const handleCityChange = (cityId) => {
    router.push(`/?city=${cityId}`, { scroll: false });
  };

  return (
    <div className="relative h-[500px] w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/bg1.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      {/* Navigation Panel */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <nav className="flex flex-col md:flex-row gap-16" aria-label="City selection">
          {cities.map((city) => {
            const cityId = city.id || city._id;
            return (
              <button
                key={cityId}
                onClick={() => handleCityChange(cityId)}
                className={`font-playfair font-medium text-2xl transition-colors duration-300 whitespace-nowrap ${
                  currentCity === cityId ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {city.fullName}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default HeroSection;
