const asyncHandler = require('express-async-handler');
const Shirt = require('../models/shirt');

exports.shirtsList = asyncHandler(async (req, res, next) => {
  const shirts = await Shirt.find().exec();
  res.render('shirtsPage', { shirts });
});

exports.shirtDetail = asyncHandler(async (req, res, next) => {
  const shirt = await Shirt.findById(req.params.id).exec();

  res.render('shirtDetail', { shirt });
});
