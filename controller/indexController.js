const asyncHandler = require('express-async-handler');

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
