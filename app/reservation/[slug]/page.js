import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import ReservationContent from '@/components/reservation/ReservationContent';
import ReviewsSection from '@/components/reservation/ReviewsSection';
import { getMealBySlug } from '@/lib/data/meals';
import { getReviewsByMealId } from '@/lib/data/reviews';
import { notFound } from 'next/navigation';

export default function ReservationPage({ params }) {
    const meal = getMealBySlug(params.slug);

    if (!meal) {
        notFound();
    }

    // Get reviews for this meal
    const reviews = getReviewsByMealId(meal.id);

    return (
        <PageTransition>
            <HeroSection />
            <ReservationContent meal={meal} />
            <ReviewsSection reviews={reviews} />
        </PageTransition>
    );
}
