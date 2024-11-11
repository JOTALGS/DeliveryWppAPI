import { Request, Response } from 'express';
import Product from '../models/products'; // Adjust the path if necessary

// Get all products
export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const products = await Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch products' });
    }
};

// Get a product by ID
export const getProductById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch product' });
    }
};

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<Response> => {
    const { name, price, description } = req.body;
    try {
        const product = await Product.create({ name, price, description });
        return res.status(201).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create product' });
    }
};

// Update an existing product by ID
export const updateProductById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        product.name = name ?? product.name;
        product.price = price ?? product.price;
        product.description = description ?? product.description;

        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update product' });
    }
};

// Delete a product by ID
export const deleteProductById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await product.destroy();
        return res.status(204).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete product' });
    }
};
