import { Router } from 'express';
import { createOrder, getOrders } from '../controllers/orderController';

const router = Router();

// Route to create a new order
router.post('/', createOrder);

// Route to retrieve all orders
router.get('/', getOrders);

export default router;