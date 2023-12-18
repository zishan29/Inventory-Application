const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

const TShirt = require('../models/tshirt');

const adminPassword = 'zishan';

exports.tshirtsList = asyncHandler(async (req, res, next) => {
  const items = await TShirt.find().exec();
  res.render('itemsPage', { items });
});

exports.tshirtDetail = asyncHandler(async (req, res, next) => {
  const item = await TShirt.findById(req.params.id).exec();
  res.render('itemDetail', { item });
});

exports.tshirtDeleteGet = asyncHandler(async (req, res, next) => {
  const item = await TShirt.findById(req.params.id);
  res.render('confirmForm', { item });
});

exports.tshirtDeletePost = asyncHandler(async (req, res, next) => {
  const enteredPassword = req.body.adminPassword;
  if (enteredPassword === adminPassword) {
    await TShirt.findByIdAndDelete(req.params.id);
    res.redirect('/t-shirts');
  } else {
    res.render('unauthorizedPage');
  }
});

exports.tshirtEditGet = asyncHandler(async (req, res, next) => {
  const item = await TShirt.findById(req.params.id);
  res.render('editForm', { item });
});

exports.tshirtEditPost = [
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
      const item = new TShirt({
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
        const theItem = await TShirt.findByIdAndUpdate(req.params.id, item, {});
        res.redirect(theItem.url);
      }
    } else {
      res.render('unauthorizedPage');
    }
  }),
];
