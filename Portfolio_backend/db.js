const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected:");
  } catch (error) {
    console.error(`❌ MongoDB Connection Error`);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
