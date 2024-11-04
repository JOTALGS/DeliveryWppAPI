import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config({ path: __dirname + '/.env' });

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import orderRouter from "./routes/order";
import productRouter from "./routes/products";
console.log(process.env.TWILIO_ACCOUNT_SID);

// Create Express app instance
const app: Application = express();
app.use(bodyParser.json());

// Route setup
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// Export the app for use in server.ts
export default app;
