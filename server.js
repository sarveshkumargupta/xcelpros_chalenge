// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const calorieRoutes = require('./routes/calorieRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimiter');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(rateLimiter);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', calorieRoutes);

app.use('/api/auth', authRoutes);

app.use(express.static('public'));

app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ message: 'Meal Calorie Count API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
