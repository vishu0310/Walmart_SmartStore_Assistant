require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const Offer = require('./models/Offer');
const Cart = require('./models/Cart');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('API is running');
});

// List products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product detail
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get product by barcode
app.get('/products/barcode/:barcode', async (req, res) => {
  try {
    const product = await Product.findOne({ barcode: req.params.barcode });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product by barcode' });
  }
});

// Fetch current offers
app.get('/offers', async (req, res) => {
  try {
    const now = new Date();
    const offers = await Offer.find({ expiry: { $gte: now } });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch offers' });
  }
});

// Add to cart
app.post('/cart', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [], total: 0 });
    }
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    // Optionally recalculate total
    const products = await Product.find({ _id: { $in: cart.items.map(i => i.productId) } });
    cart.total = cart.items.reduce((sum, item) => {
      const prod = products.find(p => p._id.toString() === item.productId.toString());
      return sum + (prod ? prod.price * item.quantity : 0);
    }, 0);
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

// Get cart by userId
app.get('/cart/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) return res.status(404).json({ error: 'Cart not found' });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

// Recommendations route
app.get('/recommendations/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('pastPurchases');
    if (!user) return res.status(404).json({ error: 'User not found' });
    const pastPurchases = user.pastPurchases;
    if (!pastPurchases.length) return res.json({ healthier: [], combos: [], discounted: [] });

    // Healthier alternatives: find products in same category, isHealthy true, not already purchased
    const healthier = await Promise.all(pastPurchases.map(async (p) => {
      return await Product.find({
        category: p.category,
        isHealthy: true,
        _id: { $ne: p._id }
      });
    }));
    const healthierFlat = [...new Set(healthier.flat().map(p => p._id.toString()))];
    const healthierProducts = await Product.find({ _id: { $in: healthierFlat } });

    // Frequently bought combos: find products bought together by other users
    const otherUsers = await User.find({ _id: { $ne: user._id }, pastPurchases: { $in: pastPurchases.map(p => p._id) } }).populate('pastPurchases');
    const comboCounts = {};
    otherUsers.forEach(u => {
      u.pastPurchases.forEach(p => {
        if (!pastPurchases.find(pp => pp._id.equals(p._id))) {
          comboCounts[p._id] = (comboCounts[p._id] || 0) + 1;
        }
      });
    });
    const comboIds = Object.entries(comboCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([id]) => id);
    const combos = await Product.find({ _id: { $in: comboIds } });

    // Discounted similar items: find offers for products in same categories as past purchases
    const categories = [...new Set(pastPurchases.map(p => p.category))];
    const discountedProducts = await Product.find({ category: { $in: categories } });
    const offers = await Offer.find({ productId: { $in: discountedProducts.map(p => p._id) }, expiry: { $gte: new Date() } });
    const discounted = await Product.find({ _id: { $in: offers.map(o => o.productId) } });

    res.json({
      healthier: healthierProducts,
      combos,
      discounted
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recommendations', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 