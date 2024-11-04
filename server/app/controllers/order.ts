// src/controllers/orders.ts
import { Request, Response } from 'express';
import { Order, saveOrder, findOrderById } from '../models/order';
import * as orderService from '../services/order';

export const placeOrder = async (req: Request, res: Response): Promise<void> => {
  const { userId, items, totalAmount, userContact } = req.body;
  const orderId = Date.now().toString();

  const newOrder: Order = {
    id: orderId,
    userId,
    items,
    totalAmount,
    userContact,
    status: 'Pending',
    createdAt: new Date(),
  };

  saveOrder(newOrder);
  await orderService.notifyUserOrderPlaced(userContact, orderId);
  await orderService.notifyOwnerNewOrder(orderId);

  res.status(201).json({ message: 'Order placed successfully', orderId });
};

export const confirmOrder = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const order = findOrderById(id);

  if (!order) {
    res.status(404).json({ error: 'Order not found' });
    return;
  }

  order.status = 'Confirmed';
  await orderService.notifyUserOrderConfirmed(order.userContact, id);

  res.status(200).json({ message: 'Order confirmed and user notified' });
};
