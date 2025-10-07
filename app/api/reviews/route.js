import { NextResponse } from 'next/server';
import { reviews } from '@/lib/data/reviews';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mealId = searchParams.get("mealId");

  if (mealId) {
    // Return only reviews for specific meal
    const filtered = reviews.filter(r => r.mealId === parseInt(mealId));
    return NextResponse.json(filtered);
  }

  // Return all reviews
  return NextResponse.json(reviews);
}
