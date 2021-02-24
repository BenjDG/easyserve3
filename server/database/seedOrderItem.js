const db = require('../models');

const seedData = [
  {
    order_numberId: 1,
    menu_itemId: 1
  },
  {
    order_numberId: 1,
    menu_itemId: 6
  },
  {
    order_numberId: 1,
    menu_itemId: 11
  },
  {
    order_numberId: 1,
    menu_itemId: 19
  },
  {
    order_numberId: 2,
    menu_itemId: 7
  },
  {
    order_numberId: 2,
    menu_itemId: 10
  },
  {
    order_numberId: 2,
    menu_itemId: 20
  },
  {
    order_numberId: 2,
    menu_itemId: 23
  }
];

async function seedOrderItem () {
  try {
    await db.orderItem.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrderItem;
