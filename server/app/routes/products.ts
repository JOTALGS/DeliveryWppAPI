import { create } from 'domain';
import { Router, Request, Response, NextFunction } from 'express';
import { getProducts, createProduct, getProductById, updateProductById, deleteProductById } from '../controllers/products';

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
const router = Router();

router.get('/', asyncHandler(getProducts));         // GET "/" - Get all products
router.post('/', asyncHandler(createProduct));      // POST "/" - Create a new product
router.get('/:id', asyncHandler(getProductById));   // GET "/:id" - Get product by ID
router.put('/:id', asyncHandler(updateProductById));// PUT "/:id" - Update an existing product
router.delete('/:id', asyncHandler(deleteProductById)); // DELETE "/:id" - Delete a product


export default router;
