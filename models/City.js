import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  fullName: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.City || mongoose.model('City', CitySchema);
