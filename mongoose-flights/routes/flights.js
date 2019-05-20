var express = require('express');
var router = express.Router();
var flightsCtlr = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtlr.index); 
router.post('/', flightsCtlr.create);
router.get('/new', flightsCtlr.new);

module.exports = router;
