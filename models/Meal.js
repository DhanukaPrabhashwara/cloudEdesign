import mongoose from 'mongoose';

const MealSchema = new mongoose.Schema({
    title: String,
    slug: String,
    description: String,
    fullDescription: String,
    category: String,
    cityId: String,
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
