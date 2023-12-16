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

router.get('/shirts/:name/:id', shirtController.shirtDetail);

router.get('/shirts/:name/:id/delete', shirtController.shirtDeleteGet);

router.post('/shirts/:name/:id/delete', shirtController.shirtDeletePost);

// router.get('/shirts/:name/:id/edit', shirtController.shirtEdit);

// router.post('/shirts/:name/:id/edit', shirtController.shirtEdit);

router.get('/jeans', jeanController.jeansList);

router.get('/jeans/:name/:id', jeanController.jeanDetail);

router.get('/jeans/:name/:id/delete', jeanController.jeanDeleteGet);

router.post('/jeans/:name/:id/delete', jeanController.jeanDeletePost);

// router.get('/jeans/:name/:id/edit', jeanController.jeanEdit);

// router.post('/jeans/:name/:id/edit', jeanController.jeanEdit);

router.get('/shoes', shoeController.shoesList);

router.get('/shoes/:name/:id', shoeController.shoeDetail);

router.get('/shoes/:name/:id/delete', shoeController.shoeDeleteGet);

router.post('/shoes/:name/:id/delete', shoeController.shoeDeletePost);

// router.get('/shoes/:name/:id/edit', shoeController.shoeEdit);

// router.post('/shoes/:name/:id/edit', shoeController.shoeEdit);

router.get('/sweatshirts', sweatshirtController.sweatshirtsList);

router.get('/sweatshirts/:name/:id', sweatshirtController.sweatshirtDetail);

router.get(
  '/sweatshirts/:name/:id/delete',
  sweatshirtController.sweatshirtDeleteGet,
);

router.post(
  '/sweatshirts/:name/:id/delete',
  sweatshirtController.sweatshirtDeletePost,
);

// router.get('/sweatshirts/:name/:id/edit', sweatshirtController.sweatshirtEdit);

// router.post('/sweatshirts/:name/:id/edit', sweatshirtController.sweatshirtEdit);

router.get('/trousers', trouserController.trousersList);

router.get('/trousers/:name/:id', trouserController.trouserDetail);

router.get('/trousers/:name/:id/delete', trouserController.trouserDeleteGet);

router.post('/trousers/:name/:id/delete', trouserController.trouserDeletePost);

// router.get('/trousers/:name/:id/edit', trouserController.trouserEditGet);

// router.post('/trousers/:name/:id/edit', trouserController.trouserEditPost);

router.get('/t-shirts', tshirtController.tshirtsList);

router.get('/t-shirts/:name/:id', tshirtController.tshirtDetail);

router.get('/t-shirts/:name/:id/delete', tshirtController.tshirtDeleteGet);

router.post('/t-shirts/:name/:id/delete', tshirtController.tshirtDeletePost);

// router.get('/t-shirts/:name/:id/edit', tshirtController.tshirtEdit);

// router.post('/t-shirts/:name/:id/edit', tshirtController.tshirtEdit);

router.get('/add', indexController.addItemGet);

router.post('/add', indexController.addItemPost);

module.exports = router;
