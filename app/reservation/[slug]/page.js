import HeroSection from '@/components/home/HeroSection';
import ReservationContent from '@/components/reservation/ReservationContent';
import { getMealBySlug } from '@/lib/mealsData';
import { notFound } from 'next/navigation';

export default function ReservationPage({ params }) {
    const meal = getMealBySlug(params.slug);

    if (!meal) {
        notFound();
    }

    return (
        <>
            <HeroSection />
            <ReservationContent meal={meal} />
        </>
    );
}
