const asyncHandler = require('express-async-handler');

const TShirt = require('../models/tshirt');

exports.tshirtsList = asyncHandler(async (req, res, next) => {
  const tshirts = await TShirt.find().exec();
  res.render('tshirtsPage', { tshirts });
});

exports.tshirtDetail = asyncHandler(async (req, res, next) => {
  const tshirt = await TShirt.findById(req.params.id).exec();
  res.render('tshirtDetail', { tshirt });
});
