const mongoose = require('mongoose');
const tree = require('../models/tree');
const { faker } = require('@faker-js/faker');

const mongoUri = 'mongodb://127.0.0.1:27017/TreeShop';

mongoose.connect(mongoUri, {}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

exports.process = async () => {
    const trees = [];
    const size = 10;
    for (let i = 0; i < size; i++) {
        trees.push({
          treename: faker.internet.username(),
          description: faker.lorem.words,
          image: faker.image.url(),
        });    
    }
    try {
        await tree.deleteMany();
        // await tree.insertMany(trees);
        console.log('Insert successfully');    
        process.exit();
      } catch (error) {
        console.error('Error seeding users', error);
        process.exit(1);
      }
}