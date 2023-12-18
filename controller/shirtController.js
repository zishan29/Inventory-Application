const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const Shirt = require('../models/shirt');

const adminPassword = 'zishan';

exports.shirtsList = asyncHandler(async (req, res, next) => {
  const items = await Shirt.find().exec();
  res.render('itemsPage', { items });
});

exports.shirtDetail = asyncHandler(async (req, res, next) => {
  const item = await Shirt.findById(req.params.id).exec();
  res.render('itemDetail', { item });
});

exports.shirtDeleteGet = asyncHandler(async (req, res, next) => {
  const item = await Shirt.findById(req.params.id);
  res.render('confirmForm', { item });
});

exports.shirtDeletePost = asyncHandler(async (req, res, next) => {
  const enteredPassword = req.body.adminPassword;
  if (enteredPassword === adminPassword) {
    await Shirt.findByIdAndDelete(req.params.id);
    res.redirect('/shirts');
  } else {
    res.render('unauthorizedPage');
  }
});

exports.shirtEditGet = asyncHandler(async (req, res, next) => {
  const item = await Shirt.findById(req.params.id);
  res.render('editForm', { item });
});

exports.shirtEditPost = [
  body('name', 'Name must not be empty').trim().isLength({ min: 1 }).escape(),
  body('price', 'Price must not be empty').trim().isLength({ min: 1 }).escape(),
  body('sizes', 'Please specify sizes').trim().isLength({ min: 1 }).escape(),
  body('description', 'Please add some description about the product')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  asyncHandler(async (req, res, next) => {
    const enteredPassword = req.body.adminPassword;
    const errors = validationResult(req);
    if (enteredPassword === adminPassword) {
      const item = new Shirt({
        name: req.body.name,
        price: req.body.price,
        sizes: req.body.sizes.split(','),
        description: req.body.description,
        fit: req.body.fit.split(','),
        _id: req.params.id,
      });

      if (!errors.isEmpty()) {
        res.render('editForm', {
          item,
          errors: errors.array(),
        });
      } else {
        const theItem = await Shirt.findByIdAndUpdate(req.params.id, item, {});
        res.redirect(theItem.url);
      }
    } else {
      res.render('unauthorizedPage');
    }
  }),
];
