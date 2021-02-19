const db = require('../models');

const seedData = [
  {
    employeeId: 1,
    status: 1,
    pin: 9999,
    notes: 'Extra ketchup on all hotdogs.'
  }
];

function seedOrder () {
  // console.log(db);
  try {
    db.order.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrder;
