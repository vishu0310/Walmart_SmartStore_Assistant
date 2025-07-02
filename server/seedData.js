const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  { name: "Milk", price: 3.99, category: "Dairy", aisle: "A1", stock: 50, isHealthy: true, barcode: "1234567890", x: 1, z: 2 },
  { name: "Bread", price: 2.49, category: "Bakery", aisle: "A2", stock: 30, isHealthy: true, barcode: "1234567891", x: 2, z: 2 },
  { name: "Bananas", price: 1.99, category: "Produce", aisle: "A3", stock: 100, isHealthy: true, barcode: "1234567892", x: 3, z: 2 },
  { name: "Chicken Breast", price: 8.99, category: "Meat", aisle: "A4", stock: 25, isHealthy: true, barcode: "1234567893", x: 4, z: 2 },
  { name: "Coca Cola", price: 4.99, category: "Beverages", aisle: "A5", stock: 75, isHealthy: false, barcode: "1234567894", x: 5, z: 2 },
  { name: "Chips", price: 3.49, category: "Snacks", aisle: "A6", stock: 40, isHealthy: false, barcode: "1234567895", x: 6, z: 2 },
  { name: "Eggs", price: 2.99, category: "Dairy", aisle: "A1", stock: 60, isHealthy: true, barcode: "1234567896", x: 1, z: 3 },
  { name: "Apples", price: 4.49, category: "Produce", aisle: "A3", stock: 80, isHealthy: true, barcode: "1234567897", x: 2, z: 3 },
  { name: "Orange Juice", price: 3.99, category: "Beverages", aisle: "A5", stock: 50, isHealthy: true, barcode: "1234567898", x: 3, z: 3 },
  { name: "Yogurt", price: 1.49, category: "Dairy", aisle: "A1", stock: 70, isHealthy: true, barcode: "1234567899", x: 4, z: 3 },
  { name: "Tomatoes", price: 2.29, category: "Produce", aisle: "A3", stock: 90, isHealthy: true, barcode: "1234567900", x: 5, z: 3 },
  { name: "Potatoes", price: 2.99, category: "Produce", aisle: "A3", stock: 100, isHealthy: true, barcode: "1234567901", x: 6, z: 3 },
  { name: "Carrots", price: 1.99, category: "Produce", aisle: "A3", stock: 100, isHealthy: true, barcode: "1234567902", x: 7, z: 3 },
  { name: "Cheese", price: 5.99, category: "Dairy", aisle: "A1", stock: 40, isHealthy: true, barcode: "1234567903", x: 8, z: 3 },
  { name: "Butter", price: 2.49, category: "Dairy", aisle: "A1", stock: 35, isHealthy: true, barcode: "1234567904", x: 9, z: 3 },
  { name: "Spinach", price: 2.99, category: "Produce", aisle: "A3", stock: 60, isHealthy: true, barcode: "1234567905", x: 10, z: 3 },
  { name: "Cereal", price: 3.99, category: "Breakfast", aisle: "A7", stock: 45, isHealthy: false, barcode: "1234567906", x: 1, z: 4 },
  { name: "Oats", price: 2.49, category: "Breakfast", aisle: "A7", stock: 55, isHealthy: true, barcode: "1234567907", x: 2, z: 4 },
  { name: "Rice", price: 4.99, category: "Grains", aisle: "A8", stock: 80, isHealthy: true, barcode: "1234567908", x: 3, z: 4 },
  { name: "Pasta", price: 2.99, category: "Grains", aisle: "A8", stock: 70, isHealthy: true, barcode: "1234567909", x: 4, z: 4 },
  { name: "Tomato Sauce", price: 1.99, category: "Canned", aisle: "A9", stock: 60, isHealthy: true, barcode: "1234567910", x: 5, z: 4 },
  { name: "Tuna", price: 3.49, category: "Canned", aisle: "A9", stock: 50, isHealthy: true, barcode: "1234567911", x: 6, z: 4 },
  { name: "Salmon", price: 7.99, category: "Seafood", aisle: "A10", stock: 30, isHealthy: true, barcode: "1234567912", x: 7, z: 4 },
  { name: "Shrimp", price: 9.99, category: "Seafood", aisle: "A10", stock: 25, isHealthy: true, barcode: "1234567913", x: 8, z: 4 },
  { name: "Ground Beef", price: 6.99, category: "Meat", aisle: "A4", stock: 40, isHealthy: false, barcode: "1234567914", x: 9, z: 4 },
  { name: "Pork Chops", price: 5.99, category: "Meat", aisle: "A4", stock: 35, isHealthy: false, barcode: "1234567915", x: 10, z: 4 },
  { name: "Lettuce", price: 1.49, category: "Produce", aisle: "A3", stock: 60, isHealthy: true, barcode: "1234567916", x: 1, z: 5 },
  { name: "Cucumber", price: 1.29, category: "Produce", aisle: "A3", stock: 70, isHealthy: true, barcode: "1234567917", x: 2, z: 5 },
  { name: "Bell Pepper", price: 2.19, category: "Produce", aisle: "A3", stock: 65, isHealthy: true, barcode: "1234567918", x: 3, z: 5 },
  { name: "Onion", price: 1.09, category: "Produce", aisle: "A3", stock: 80, isHealthy: true, barcode: "1234567919", x: 4, z: 5 },
  { name: "Garlic", price: 0.99, category: "Produce", aisle: "A3", stock: 90, isHealthy: true, barcode: "1234567920", x: 5, z: 5 },
  { name: "Strawberries", price: 3.99, category: "Produce", aisle: "A3", stock: 50, isHealthy: true, barcode: "1234567921", x: 6, z: 5 },
  { name: "Blueberries", price: 4.49, category: "Produce", aisle: "A3", stock: 45, isHealthy: true, barcode: "1234567922", x: 7, z: 5 },
  { name: "Grapes", price: 2.99, category: "Produce", aisle: "A3", stock: 55, isHealthy: true, barcode: "1234567923", x: 8, z: 5 },
  { name: "Peanut Butter", price: 3.49, category: "Spreads", aisle: "A11", stock: 40, isHealthy: false, barcode: "1234567924", x: 9, z: 5 },
  { name: "Jelly", price: 2.49, category: "Spreads", aisle: "A11", stock: 35, isHealthy: false, barcode: "1234567925", x: 10, z: 5 },
  { name: "Almonds", price: 5.99, category: "Nuts", aisle: "A12", stock: 30, isHealthy: true, barcode: "1234567926", x: 1, z: 6 },
  { name: "Cashews", price: 6.49, category: "Nuts", aisle: "A12", stock: 25, isHealthy: true, barcode: "1234567927", x: 2, z: 6 },
  { name: "Walnuts", price: 7.49, category: "Nuts", aisle: "A12", stock: 20, isHealthy: true, barcode: "1234567928", x: 3, z: 6 },
  { name: "Sunflower Seeds", price: 2.99, category: "Seeds", aisle: "A13", stock: 40, isHealthy: true, barcode: "1234567929", x: 4, z: 6 },
  { name: "Pumpkin Seeds", price: 3.49, category: "Seeds", aisle: "A13", stock: 35, isHealthy: true, barcode: "1234567930", x: 5, z: 6 },
  { name: "Granola Bars", price: 4.99, category: "Snacks", aisle: "A6", stock: 50, isHealthy: false, barcode: "1234567931", x: 6, z: 6 },
  { name: "Chocolate", price: 2.99, category: "Snacks", aisle: "A6", stock: 60, isHealthy: false, barcode: "1234567932", x: 7, z: 6 },
  { name: "Ice Cream", price: 5.49, category: "Frozen", aisle: "A14", stock: 30, isHealthy: false, barcode: "1234567933", x: 8, z: 6 },
  { name: "Frozen Pizza", price: 6.99, category: "Frozen", aisle: "A14", stock: 25, isHealthy: false, barcode: "1234567934", x: 9, z: 6 },
  { name: "Frozen Vegetables", price: 3.99, category: "Frozen", aisle: "A14", stock: 40, isHealthy: true, barcode: "1234567935", x: 10, z: 6 },
  { name: "Toothpaste", price: 2.49, category: "Personal Care", aisle: "A15", stock: 60, isHealthy: true, barcode: "1234567936", x: 1, z: 7 },
  { name: "Shampoo", price: 4.99, category: "Personal Care", aisle: "A15", stock: 50, isHealthy: true, barcode: "1234567937", x: 2, z: 7 },
  { name: "Soap", price: 1.99, category: "Personal Care", aisle: "A15", stock: 70, isHealthy: true, barcode: "1234567938", x: 3, z: 7 },
  { name: "Laundry Detergent", price: 8.99, category: "Household", aisle: "A16", stock: 40, isHealthy: false, barcode: "1234567939", x: 4, z: 7 },
  { name: "Paper Towels", price: 5.99, category: "Household", aisle: "A16", stock: 35, isHealthy: false, barcode: "1234567940", x: 5, z: 7 },
  { name: "Toilet Paper", price: 6.99, category: "Household", aisle: "A16", stock: 30, isHealthy: false, barcode: "1234567941", x: 6, z: 7 },
  { name: "Dish Soap", price: 2.99, category: "Household", aisle: "A16", stock: 50, isHealthy: true, barcode: "1234567942", x: 7, z: 7 },
  { name: "Trash Bags", price: 4.49, category: "Household", aisle: "A16", stock: 45, isHealthy: false, barcode: "1234567943", x: 8, z: 7 },
  { name: "Batteries", price: 7.99, category: "Electronics", aisle: "A17", stock: 20, isHealthy: false, barcode: "1234567944", x: 9, z: 7 },
  { name: "Light Bulbs", price: 3.99, category: "Electronics", aisle: "A17", stock: 30, isHealthy: false, barcode: "1234567945", x: 10, z: 7 }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData(); 