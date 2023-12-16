const asyncHandler = require('express-async-handler');
const Jean = require('../models/jean');

exports.jeansList = asyncHandler(async (req, res, next) => {
  const jeans = await Jean.find().exec();
  res.render('jeansPage', { jeans });
});

exports.jeanDetail = asyncHandler(async (req, res, next) => {
  const jean = await Jean.findById(req.params.id).exec();
  res.render('jeanDetail', { jean });
});

exports.jeanDeleteGet = asyncHandler(async (req, res, next) => {
  const jean = await Jean.findById(req.params.id);
  res.render('jeanDelete', { jean });
});

exports.jeanDeletePost = asyncHandler(async (req, res, next) => {
  await Jean.findByIdAndDelete(req.params.id);
  res.redirect('/jeans');
});
