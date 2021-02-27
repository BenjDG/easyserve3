require('dotenv').config();
const db = require('../models');

const testUsers = [
  {
    first_name: 'Jane',
    last_name: 'Doe',
    email: '1@1.com',
    password: process.env.JANE_PASSWORD,
    role: 'admin'
  },
  {
    first_name: 'Billy',
    last_name: 'Joel',
    email: '1@2.com',
    password: process.env.BILLY_PASSWORD,
    role: 'admin'
  },
  {
    first_name: 'Lloyd',
    last_name: 'Christmas',
    email: '1@3.com',
    password: process.env.LLOYD_PASSWORD,
    role: 'admin'
  }
];

module.exports = async function seedUsers () {
  await testUsers.forEach(async user => {
    try {
      const userTemp = await db.user.create(user);
      console.log(`User Id: ${userTemp.id}: ${userTemp.email} created`);
    } catch (err) {
      console.error(err);
    }
  });
};
