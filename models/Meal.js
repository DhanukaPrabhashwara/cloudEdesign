import mongoose from 'mongoose';

const MealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  description: String,
  fullDescription: String,
  category: String,
  cityId: String,
   // Price fields
  price: Number,
  adultPrice: Number,
  childPrice: Number,
  image: String,
  images: [String],
  availability: String,
  schedule: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Meal || mongoose.model('Meal', MealSchema);
