import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import ReservationContent from '@/components/reservation/ReservationContent';
import ReviewsSection from '@/components/reservation/ReviewsSection';
import { connectDB } from '@/lib/mongodb';
import Meal from '@/models/Meal';
import Review from '@/models/Review';
import { notFound } from 'next/navigation';

export default async function ReservationPage({ params }) {
  await connectDB();

  let meal = await Meal.findOne({ slug: params.slug }).lean();
  if (!meal) {
    notFound();
  }

  // Serialize meal _id
  meal._id = meal._id.toString();

  let reviews = await Review.find({ mealId: meal._id }).lean();

  // Serialize review _id, mealId and date fields
  reviews = reviews.map(review => ({
    ...review,
    _id: review._id.toString(),
    mealId: review.mealId.toString(),
    date: review.date ? review.date.toISOString() : null,
  }));

  return (
    <PageTransition>
      <HeroSection />
      <ReservationContent meal={meal} reviews={reviews} />
      <ReviewsSection reviews={reviews} />
    </PageTransition>
  );
}
