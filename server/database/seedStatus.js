const db = require('../models');

const seedData = [
  {
    name: 'new order'
  },
  {
    name: 'cooking'
  },
  {
    name: 'ready'
  },
  {
    name: 'completed'
  }
];

async function status () {
  // console.log(db);
  try {
    await db.status.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = status;
