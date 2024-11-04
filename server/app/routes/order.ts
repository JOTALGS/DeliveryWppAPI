// src/routes/orders.ts
import { Router, Request, Response } from 'express';
import { placeOrder, confirmOrder } from '../controllers/order';

const router = Router();

// Define routes and their respective handlers
router.post('/', (req: Request, res: Response) => placeOrder(req, res));
router.patch('/:id/confirm', (req: Request, res: Response) => confirmOrder(req, res));

export default router;
