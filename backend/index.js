const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { clerkMiddleware } = require('@clerk/express');

const connectDB = require('./config/db');

const questionRoutes = require('./routes/questions.routes');
const examRoutes = require('./routes/exams.routes');
const mentorRoutes = require('./routes/mentors.routes');
const organizationRoutes = require('./routes/organizations.routes');
const userRoutes = require('./routes/users.routes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// middleware
app.use(
	cors()
	//   {
		//   origin: 'https://qwestions-web-app-izue.vercel.app',
		//   methods: ['GET', 'POST'],
		// }
	);
	
	// app.options('*', cors());
	
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clerkMiddleware())



// Routes
app.use('/api/user', userRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/organization', organizationRoutes);

app.listen(5000, () => {
  console.log(`Server running at http://localhost:${5000}`);
});

// Export the serverless function for Vercel
// module.exports = (req, res) => {
// 	app(req, res);
// };
