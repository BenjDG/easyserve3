const db = require('../models');

const seedData = [
  {
    name: 'Table 1'
  },
  {
    name: 'Table 2'
  },
  {
    name: 'Table 3'
  },
  {
    name: 'Table 4'
  },
  {
    name: 'Table 5'
  },
  {
    name: 'Table 6'
  },
  {
    name: 'Table 7'
  },
  {
    name: 'Table 8'
  }
];

async function seedRestTable () {
  // console.log(db);
  try {
    await db.restTable.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedRestTable;
