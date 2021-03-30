const db = require('../models');

const SeedData = [
  {
    userId: 1,
    statusId: 1,
    restTableId: 1,
    notes: 'Extra ketchup on all hotdogs.',
    total: 10.96,
    paid: 1
  },
  {
    userId: 2,
    statusId: 2,
    restTableId: 2,
    notes: 'Extra mustard on all hotdogs.',
    total: 11.56,
    paid: 1
  }
];

async function seedOrder () {
  try {
    await db.order.bulkCreate(SeedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrder;
