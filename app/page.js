import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import MealCards from "@/components/home/MealCards";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <MealCards />
        <Contact />
      </div>
  );
}
