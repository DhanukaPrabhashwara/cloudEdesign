import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  mealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true },
  name: String,
  rating: Number,
  avatar: String,
  comment: String,
  date: Date,
  verified: Boolean
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
