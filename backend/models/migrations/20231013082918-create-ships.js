'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Ships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destinationAddress: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      recipientName: {
        type: Sequelize.STRING
      },
      senderName: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Ships');

  }
};
