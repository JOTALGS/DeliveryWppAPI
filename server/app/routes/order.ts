// src/routes/orders.ts
import { Router, Request, Response, NextFunction } from 'express';
import { getOrders, placeOrder, confirmOrder, deleteOrder, cancelOrder } from '../controllers/order';

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
const router = Router();

// Define routes and their respective handlers
router.get('/', asyncHandler(getOrders));                      // GET "/" - Get all orders
router.post('/', asyncHandler(placeOrder));                    // POST "/" - Place a new order
router.patch('/:id/confirm', asyncHandler(confirmOrder));      // PATCH "/:id/confirm" - Confirm an order
router.delete('/:id', asyncHandler(deleteOrder));              // DELETE "/:id" - Delete an order
router.patch('/:id/cancel', asyncHandler(cancelOrder));        // PATCH "/:id/cancel" - Cancel an order

export default router;
