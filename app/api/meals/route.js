import { connectDB } from '@/lib/mongodb';
import Meal from '@/models/Meal';
import City from '@/models/City';

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);

  const citySlug = searchParams.get('city');
  const category = searchParams.get('category');

  // Find city by slug
  let cityFilter = {};
  if (citySlug) {
    const city = await City.findOne({ slug: citySlug }).lean();
    if (!city) {
      return Response.json([]); // No such city, return no meals
    }
    cityFilter.cityId = city._id;
  }

  // Add category filter if there's a valid category
  if (category && category !== 'all') {
    cityFilter.category = category;
  }

  const meals = await Meal.find(cityFilter).lean();
  return Response.json(meals);
}
