'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profilePicture: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      Quota: {
        type: Sequelize.STRING
      },
      votingCount: {
        type: Sequelize.INTEGER
      },
      CitizenNationalID: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Candidates');
  }
};