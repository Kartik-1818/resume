const express = require('express');
const app = express();
const connectDB = require('./db');
const contactRoutes = require("./contactrouters/rou"); 
const cors = require("cors");

const port = process.env.PORT || 3000;


// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
  origin : "https://resume-qn89.vercel.app/"
}));
// Routes
app.use("/api", contactRoutes);


// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
