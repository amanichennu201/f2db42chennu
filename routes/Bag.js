var express = require('express');
const bag_controlers = require('../controllers/Bag');
var router = express.Router();
router.get('/', bag_controlers.bag_view_all_Page);
/* GET detail Bag page */ 
router.get('/detail', Bag_controlers.Bag_view_one_Page); 
module.exports = router;

