import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/orderController';

const router = Router();

// Route to create a new order
router.post('/orders', createOrder);

// Route to retrieve all orders
router.get('/orders', getOrders);

export default router;