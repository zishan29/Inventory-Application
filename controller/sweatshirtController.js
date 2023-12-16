const asyncHandler = require('express-async-handler');

const Sweatshirt = require('../models/sweatshirt');

exports.sweatshirtsList = asyncHandler(async (req, res, next) => {
  const sweatshirts = await Sweatshirt.find().exec();
  res.render('sweatshirtsPage', { sweatshirts });
});

exports.sweatshirtDetail = asyncHandler(async (req, res, next) => {
  const sweatshirt = await Sweatshirt.findById(req.params.id).exec();
  res.render('sweatshirtDetail', { sweatshirt });
});

exports.sweatshirtDeleteGet = asyncHandler(async (req, res, next) => {
  const sweatshirt = await Sweatshirt.findById(req.params.id);
  res.render('sweatshirtDelete', { sweatshirt });
});

exports.sweatshirtDeletePost = asyncHandler(async (req, res, next) => {
  await Sweatshirt.findByIdAndDelete(req.params.id);
  res.redirect('/sweatshirts');
});
