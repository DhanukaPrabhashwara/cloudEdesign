"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import CityInfoAndFilterSection from "@/components/ui/CityInfoAndFilterSection";
import MealCards from "@/components/home/MealCards";
import Contact from "@/components/home/Contact";

export default function Home() {
  const searchParams = useSearchParams();
  const currentCitySlug = searchParams.get("city") || "city-a";

  const [city, setCity] = useState(null);
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    async function fetchCity() {
      const res = await fetch(`/api/cities?slug=${currentCitySlug}`);
      if (res.ok) {
        setCity(await res.json());
      }
    }
    async function fetchFilters() {
      const res = await fetch("/api/categories");
      if (res.ok) {
        setFilters(await res.json());
      }
    }
    fetchCity();
    fetchFilters();
  }, [currentCitySlug]);

  return (
    <PageTransition>
      <HeroSection />
      <CityInfoAndFilterSection
        city={city}
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <MealCards activeFilter={activeFilter} citySlug={currentCitySlug} />
      <Contact />
    </PageTransition>
  );
}
