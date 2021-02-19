const db = require('../models');

const seedData = [
  {
    statusId: 1,
    name: 'new order'
  },
  {
    statusId: 2,
    name: 'cooking'
  },
  {
    statusId: 3,
    name: 'ready'
  }
];

function Status () {
  // console.log(db);
  try {
    db.status.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = Status;
