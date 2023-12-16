const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

const Jean = require('../models/jean');
const Shirt = require('../models/shirt');
const Shoe = require('../models/shoe');
const Sweatshirt = require('../models/sweatshirt');
const Trouser = require('../models/trouser');
const TShirt = require('../models/tshirt');

exports.index = asyncHandler(async (req, res, next) => {
  const [jeans, shirts, shoes, sweatshirts, trousers, tshirts] =
    await Promise.all([
      Jean.find().exec(),
      Shirt.find().exec(),
      Shoe.find().exec(),
      Sweatshirt.find().exec(),
      Trouser.find().exec(),
      TShirt.find().exec(),
    ]);

  res.render('index', {
    jeans,
    shirts,
    shoes,
    sweatshirts,
    trousers,
    tshirts,
  });
});

exports.addItemGet = asyncHandler(async (req, res, next) => {
  res.render('addForm');
});

exports.addItemPost = [
  body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('price', 'Price must not be empty').trim().isLength({ min: 1 }).escape(),
  body('sizes', 'Please specify sizes').trim().isLength({ min: 1 }).escape(),
  body('description', 'Please add some description about the product')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    let item;
    if (req.body.category === 'Shirt') {
      item = new Shirt({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    } else if (req.body.category === 'Jean') {
      item = new Jean({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    } else if (req.body.category === 'Trouser') {
      item = new Trouser({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    } else if (req.body.category === 'TShirt') {
      item = new TShirt({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    } else if (req.body.category === 'Sweatshirt') {
      item = new Sweatshirt({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    } else {
      item = new Shoe({
        name: req.body.name,
        imageURL: 'https://i.imgur.com/lKrcfmo.jpg',
        price: req.body.price,
        sizes: req.body.sizes.split(', '),
        description: req.body.description,
        fit: req.body.fit.split(', '),
      });
    }
    if (!errors.isEmpty()) {
      res.render('addForm', {
        errors: errors.array(),
      });
    } else {
      await item.save();
      res.redirect(item.url);
    }
  }),
];
