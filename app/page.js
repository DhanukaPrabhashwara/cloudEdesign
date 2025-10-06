import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import MealCards from "@/components/home/MealCards";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
      <PageTransition>
        <HeroSection />
        <MealCards />
        <Contact />
      </PageTransition>
  );
}
