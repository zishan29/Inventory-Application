const asyncHandler = require('express-async-handler');

const Trouser = require('../models/trouser');

exports.trousersList = asyncHandler(async (req, res, next) => {
  const trousers = await Trouser.find().exec();
  res.render('trousersPage', { trousers });
});

exports.trouserDetail = asyncHandler(async (req, res, next) => {
  const trouser = await Trouser.findById(req.params.id).exec();
  res.render('trouserDetail', { trouser });
});
