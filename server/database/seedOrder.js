const db = require('../models');
const seedOrderItem = require('./seedOrderItem');

const SeedData = [
  {
    employeeId: 1,
    status: 1,
    notes: 'Extra ketchup on all hotdogs.'
  },
  {
    employeeId: 2,
    status: 2,
    notes: 'Extra mustard on all hotdogs.'
  }
];

function seedOrder () {
  // console.log(db);
  try {
    db.order.bulkCreate(SeedData);
    seedOrderItem();
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrder;
