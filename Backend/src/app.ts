import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import orderRoutes from './routes/orderRoutes';
import errorHandler from './middleware/errorHandler';
import connectDB from './config/database';

const app = express();

// CORS middleware
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;