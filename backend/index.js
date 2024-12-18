const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const questionRoutes = require('./routes/questions.routes');
const examRoutes = require('./routes/exams.routes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
console.log(process.env.BACKEND_URL);
// middleware
app.use(cors({
  origin: process.env.BACKEND_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/question', questionRoutes);
app.use('/api/exam', examRoutes);

// Export the serverless function for Vercel
module.exports = (req, res) => {
  app(req, res);
};
