var express = require('express');
const Bag_controlers = require('../controllers/Bag');
var router = express.Router();

/* GET home page. */
router.get('/', Bag_controlers.Bag_view_all_Page);
/* GET detail bag page */
router.get('/detail', Bag_controlers.Bag_view_one_Page);
/* GET create bag page */
router.get('/create', Bag_controlers.Bag_create_Page);
/* GET create update page */
router.get('/update', Bag_controlers.Bag_update_Page);
/* GET delete bag page */
router.get('/delete', Bag_controlers.Bag_delete_Page);

module.exports = router;

