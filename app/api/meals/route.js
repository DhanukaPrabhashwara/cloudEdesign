import { connectDB } from '@/lib/mongodb';
import Meal from '@/models/Meal';

export async function GET(req) {
    await connectDB();
    const meals = await Meal.find({});
    return Response.json(meals);
}
