import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from "../dbconfig/database"; // Import your Sequelize instance

// Define the Product attributes interface
interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Optional attributes for creation
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

// Define the Product class extending Sequelize Model
class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the Product model with Sequelize
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize, // pass your Sequelize instance
        modelName: 'Product',
        tableName: 'products',
    }
);

export default Product;
