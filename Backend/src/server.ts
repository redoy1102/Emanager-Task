import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connect from './config/database';
import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware - MUST be before other middleware
app.use(cors());

// Middleware
app.use(express.json());

// Connect to the database
connect();

// Import routes
app.use('/api/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});