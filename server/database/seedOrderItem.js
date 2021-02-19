const db = require('../models');

const seedData = [
  {
    order_numberId: 1,
    order_itemId: 1
  },
  {
    order_numberId: 1,
    order_itemId: 6
  },
  {
    order_numberId: 1,
    order_itemId: 11
  },
  {
    order_numberId: 1,
    order_itemId: 19
  },
  {
    order_numberId: 2,
    order_itemId: 7
  },
  {
    order_numberId: 2,
    order_itemId: 10
  },
  {
    order_numberId: 2,
    order_itemId: 20
  },
  {
    order_numberId: 2,
    order_itemId: 23
  }
];

function seedOrderItem () {
  // console.log(db);
  try {
    db.orderItem.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedOrderItem;
