const express = require('express');

const router = express.Router();

const indexController = require('../controller/indexController');
const jeanController = require('../controller/jeanController');
const shirtController = require('../controller/shirtController');
const shoeController = require('../controller/shoeController');
const sweatshirtController = require('../controller/sweatshirtController');
const trouserController = require('../controller/trouserController');
const tshirtController = require('../controller/tshirtController');

router.get('/', indexController.index);

router.get('/shirts', shirtController.shirtsList);

router.get('/shirts/:name/:description/:id', shirtController.shirtDetail);

router.get('/jeans', jeanController.jeansList);

router.get('/jeans/:name/:description/:id', jeanController.jeanDetail);

router.get('/shoes', shoeController.shoesList);

router.get('/shoes/:name/:description/:id', shoeController.shoeDetail);

router.get('/sweatshirts', sweatshirtController.sweatshirtsList);

router.get(
  '/sweatshirts/:name/:description/:id',
  sweatshirtController.sweatshirtDetail,
);

router.get('/trousers', trouserController.trousersList);

router.get('/trousers/:name/:description/:id', trouserController.trouserDetail);

router.get('/t-shirts', tshirtController.tshirtsList);

router.get('/t-shirts/:name/:description/:id', tshirtController.tshirtDetail);

module.exports = router;
