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

module.exports = router;
