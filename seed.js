import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });
import mongoose from 'mongoose';
import Meal from './models/Meal.js';
import City from './models/City.js';
import Category from './models/Category.js';
import Review from './models/Review.js';


const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI);

const sampleCities = [
  { name: "City A", slug: "city-a", fullName: "ABC Ventures - City A", description: "Best city dining" },
  { name: "City B", slug: "city-b", fullName: "ABC Ventures - City B", description: "Premium experience" },
  // Add other cities
];

const sampleCategories = [
  { name: "All", slug: "all" },
  { name: "Breakfast", slug: "breakfast" },
  { name: "Lunch", slug: "lunch" },
  { name: "Dinner", slug: "dinner" },
  // Add other categories
];

const sampleMeals = [
  {
    title: "Arabic Breakfast",
    slug: "arabic-breakfast",
    description: "Authentic Arabic breakfast",
    category: "breakfast",
    cityId: "city-a",
    price: 1000,
    adultPrice: 1000,
    childPrice: 500,
    image: "/bg1.png",         // Using /bg1.png from public folder
    images: ["/bg1.png"],
    availability: "In Stock",
    schedule: "6:30am - 10:30am",
  },
  // Add other meals
];

const sampleReviews = [
  {
    mealId: null, // to match after meals are created
    name: "Dhanuka Prabhashwara",
    rating: 5,
    avatar: "",
    comment: "Excellent food & service!",
    date: new Date(),
    verified: true
  },
  // Add other reviews
];

// Connect, clear collections, and add data
async function seed() {
  await mongoose.connect(MONGODB_URI);

  await City.deleteMany();
  await Category.deleteMany();
  await Meal.deleteMany();
  await Review.deleteMany();

  const cities = await City.insertMany(sampleCities);
  const categories = await Category.insertMany(sampleCategories);

  // Map city slug/id for meals
  const cityMap = new Map(cities.map(c => [c.slug, c._id]));
  sampleMeals.forEach(meal => {
    meal.cityId = cityMap.get(meal.cityId) || meal.cityId;
  });

  const meals = await Meal.insertMany(sampleMeals);

  // Map meal slug/id for reviews
  const mealMap = new Map(meals.map(m => [m.slug, m._id]));
  sampleReviews.forEach(review => {
    // assign mealId to the first meal as example
    review.mealId = meals.length ? meals[0]._id : null;
  });

  await Review.insertMany(sampleReviews);

  console.log("Seed completed");

  await mongoose.disconnect();
}

seed().catch(console.error);
