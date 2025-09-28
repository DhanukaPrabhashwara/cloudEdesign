import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import MealCards from "@/components/home/MealCards";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <MealCards />
      </div>
  );
}
