module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('products', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          price: {
              type: Sequelize.FLOAT,
              allowNull: false
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: true
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
      });
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('products');
  }
};
