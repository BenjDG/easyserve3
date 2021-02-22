const db = require('../models');

const SeedData = [
  {
    employeeId: 1,
    statusId: 1,
    restTableId: 1,
    notes: 'Extra ketchup on all hotdogs.'
  },
  {
    employeeId: 2,
    statusId: 2,
    restTableId: 2,
    notes: 'Extra mustard on all hotdogs.'
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
