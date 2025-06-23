const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  discountPercent: { type: Number, required: true },
  expiry: { type: Date, required: true },
  department: String
});

module.exports = mongoose.model('Offer', OfferSchema); 