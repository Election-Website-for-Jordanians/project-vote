"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "PartyListings",
      [
        {
          partyID: 1,
          Name: "حزب النهج الجديد",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
        {
          partyID: 2,
          Name: "حزب القدوة الأردني",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
        {
          partyID: 3,
          Name: "حزب الشعب الديمقراطي",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
        {
          partyID: 4,
          Name: "حزب الميثاق الوطني",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
        {
          partyID: 5,
          Name: "حزب العمال",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
        {
          partyID: 6,
          Name: "حزب التكامل الوطني",
          members: 3,
          votingCount: 0,
          createdAt: "2024-08-18T00:00:00Z",
          updatedAt: "2024-08-18T00:00:00Z",
          isApproved: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("PartyListings", null, {});
  },
};
