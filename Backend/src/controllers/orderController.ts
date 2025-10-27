import { Request, Response } from 'express';
import Order from '../models/Order';

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { name, whatsapp, email, cart, total } = req.body;

    // Validation
    if (!name || !whatsapp || !email || !cart || !total) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        required: ['name', 'whatsapp', 'email', 'cart', 'total'] 
      });
    }

    if (!Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({ message: 'Cart must be a non-empty array' });
    }

    const order = new Order(req.body);
    await order.save();
    
    res.status(201).json({ 
      message: 'Order created successfully',
      order 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

// Retrieve all orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};