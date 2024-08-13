'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Advertisments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      advertismentID: {
        type: Sequelize.INTEGER
      },
      pictuer: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      votingCount: {
        type: Sequelize.INTEGER
      },
      CandidateID: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisments');
  }
};