const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: ' Mens Haircut' },
    { name: 'Womens Haircut' },
    { name: 'Color' },
    { name: 'Style' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Mens Cut',
      description:
        'Classic Mens Cut',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 30.99,
      quantity: 500
    },
    {
      name: 'Womens Cut',
      description:
        'Woomens Trim',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 50.99,
      quantity: 500
    },
    {
      name: 'Color',
      category: categories[1]._id,
      description:
        'Whatever color you want',
      image: 'toilet-paper.jpg',
      price: 70.99,
      quantity: 20
    },
    {
      name: 'Style',
      category: categories[1]._id,
      description:
        'Whatever style you want',
      image: 'soap.jpg',
      price: 40.99,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
