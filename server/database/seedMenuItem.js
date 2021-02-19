const db = require('../models');

const seedData = [
  {
    title: 'Andy Secular',
    category: 'hotdog',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'The Burner',
    category: 'hotdog',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Philly',
    category: 'hotdog',
    price: '2.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Chihuahua',
    category: 'hotdog',
    price: '0.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'BLT Dog',
    category: 'hotdog',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Kitchen Sink',
    category: 'hotdog',
    price: '4.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Bio Diesel',
    category: 'hotdog',
    price: '4.59',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Corn Dog',
    category: 'hotdog',
    price: '2.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Meat Candy',
    category: 'hotdog',
    price: '4.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Coke',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Diet Coke',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Mr Pibb',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Sprite',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Bottled Water',
    category: 'drink',
    price: '1.59',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Bottled Tea',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Lemonade',
    category: 'drink',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Bud Light',
    category: 'drink',
    price: '3.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'IPA',
    category: 'drink',
    price: '3.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Fries',
    category: 'side',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'O Rings',
    category: 'side',
    price: '2.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Chips',
    category: 'side',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Vanilla',
    category: 'icecream',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Chocolate',
    category: 'icecream',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: 'Strawberry',
    category: 'icecream',
    price: '1.99',
    created_at: new Date(),
    updated_at: new Date()
  }
];

function seedMenuItem () {
  // console.log(db);
  try {
    db.menuItem.bulkCreate(seedData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedMenuItem;
