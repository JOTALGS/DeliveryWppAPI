import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../dbconfig/database"; // Import your Sequelize instance

// Define the Order attributes interface
interface OrderAttributes {
    id: number;
    items: string[]; // Array of product IDs (for simplicity)
    quantity: number;
    totalAmount: number;
    userContact: string;
    status: 'pending' | 'confirmed' | 'canceled';
    orderDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

// Optional attributes for creation
interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

// Define the Order class extending Sequelize Model
class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    public id!: number;
    public items!: string[];
    public quantity!: number;
    public totalAmount!: number;
    public userContact!: string;
    public status!: 'pending' | 'confirmed' | 'canceled';
    public orderDate!: Date;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Order model with Sequelize
Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        items: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Storing an array of product IDs
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        userContact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'confirmed', 'canceled'), // Restrict status to specific values
            allowNull: false,
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize, // pass your Sequelize instance
        modelName: 'Order',
        tableName: 'orders',
    }
);

export default Order;
