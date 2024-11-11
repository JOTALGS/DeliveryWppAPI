// src/controllers/orders.ts
import { Request, Response } from 'express';
import Order from '../models/order'; // Adjust the path if necessary

// Get all orders
export const getOrders = async (req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await Order.findAll();
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ error: 'An error occurred while fetching orders.' });
  }
};

// Place a new order
export const placeOrder = async (req: Request, res: Response): Promise<Response> => {
  const { items, quantity, totalAmount, userContact } = req.body;
  const status = 'pending';
  const orderDate = new Date();

  try {
    const newOrder = await Order.create({
      items,
      quantity,
      totalAmount,
      userContact,
      status,
      orderDate,
    });

    return res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ error: 'An error occurred while placing the order.' });
  }
};

// Confirm an order
export const confirmOrder = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.status = 'confirmed';
    await order.save();

    // Example of notifying user - Replace with actual notification logic
    await notifyUserOrderConfirmed(order.userContact, id);

    return res.status(200).json({ message: 'Order confirmed and user notified', order });
  } catch (error) {
    console.error("Error confirming order:", error);
    return res.status(500).json({ error: 'An error occurred while confirming the order.' });
  }
};