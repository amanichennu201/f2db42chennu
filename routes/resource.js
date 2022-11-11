var express = require('express'); 
var router = express.Router();
var api_controller = require('../controllers/api'); 
var Bag_controller = require('../controllers/Bag'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Bag.  
router.post('/Bags', Bag_controller.Bag_create_post); 
 
// DELETE request to delete Bag. 
router.delete('/Bags/:id', Bag_controller.Bag_delete); 
 
// PUT request to update Bag. 
router.put('/Bags/:id', Bag_controller.Bag_update_put); 
 
// GET request for one Bag. 
router.get('/Bags/:id', Bag_controller.Bag_detail); 
 
// GET request for list of all Bag items. 
router.get('/Bags', Bag_controller.Bag_list); 
 
module.exports = router; 
 