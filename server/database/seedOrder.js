const db = require('../models');

const SeedData = [
  {
    employeeId: 1,
    statusId: 1,
    notes: 'Extra ketchup on all hotdogs.'
  },
  {
    employeeId: 2,
    statusId: 2,
    notes: 'Extra mustard on all hotdogs.'
  }
];

function seedOrder () {
  // console.log(db);
  try {
    db.order.bulkCreate(SeedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrder;
