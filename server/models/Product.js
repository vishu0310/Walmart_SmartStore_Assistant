const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now }
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  aisleLocation: String,
  nutritionInfo: mongoose.Schema.Types.Mixed,
  reviews: [ReviewSchema],
  barcode: String,
  imageUrl: String,
  tags: [String],
  isHealthy: Boolean
});

module.exports = mongoose.model('Product', ProductSchema); 