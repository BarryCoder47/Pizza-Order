const express = require('express')
const pizzaController = require('../controller/pizzaController')
const router = express.Router();

router.get('/', pizzaController);

router.post('/', pizzaController.createPizzaPost);

router.put('/', pizzaController);

router.delete('/', pizzaController);

  module.exports = router;