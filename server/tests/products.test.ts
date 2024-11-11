import request from 'supertest';
import app from '../app'; // Import your Express app

describe('Product Routes', () => {
    let productId: number;

    // Test for GET all products
    it('fetch all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test for POST create product
    it('create a new product', async () => {
        const newProduct = { name: 'New Product', price: 100 };
        const response = await request(app).post('/api/products').send(newProduct);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'New Product');

        productId = response.body.id;
    });

    // Test for GET product by ID
    it('fetch a product by ID', async () => {
        const response = await request(app).get(`/api/products/${productId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', productId);
    });

    // Test for PUT update product
    it('update an existing product', async () => {
        const updatedProduct = { name: 'Updated Product', price: 150 };
        const response = await request(app).put(`/api/products/${productId}`).send(updatedProduct);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', 'Updated Product');
    });

    // Test for DELETE product by ID
    it('delete a product by ID', async () => {
        const response = await request(app).delete(`/api/products/${productId}`);
        expect(response.status).toBe(204); // No content
    });
});