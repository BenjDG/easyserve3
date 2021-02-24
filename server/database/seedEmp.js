const db = require('../models');

const empSeedData = [
  {
    first_name: 'John',
    last_name: 'Doe',
    pin: 9999,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    first_name: 'Billy',
    last_name: 'Joel',
    pin: 9998,
    created_at: new Date(),
    updated_at: new Date()
  }
];

async function seedEmp () {
  try {
    await db.employee.bulkCreate(empSeedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedEmp;
