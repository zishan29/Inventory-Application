const asyncHandler = require('express-async-handler');
const Shoe = require('../models/shoe');

exports.shoesList = asyncHandler(async (req, res, next) => {
  const shoes = await Shoe.find().exec();
  res.render('shoesPage', { shoes });
});

exports.shoeDetail = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findById(req.params.id).exec();
  res.render('shoeDetail', { shoe });
});

exports.shoeDeleteGet = asyncHandler(async (req, res, next) => {
  const shoe = await Shoe.findById(req.params.id);
  res.render('shoeDelete', { shoe });
});

exports.shoeDeletePost = asyncHandler(async (req, res, next) => {
  await Shoe.findByIdAndDelete(req.params.id);
  res.redirect('/shoes');
});
