import HeroSection from '@/components/home/HeroSection';
import ReservationContent from '@/components/reservation/ReservationContent';
import ReviewsSection from '@/components/reservation/ReviewsSection';
import { getMealBySlug } from '@/lib/mealsData';
import { notFound } from 'next/navigation';
import PageTransition from '@/components/PageTransition';

export default function ReservationPage({ params }) {
    const meal = getMealBySlug(params.slug);

    if (!meal) {
        notFound();
    }

    return (
        <PageTransition>
            <HeroSection />
            <ReservationContent meal={meal} />
            <ReviewsSection reviews={meal.reviews || []} />
        </PageTransition>
    );
}
