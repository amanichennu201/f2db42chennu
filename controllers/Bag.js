var Bag = require('../models/Bag'); 
 
// List of all Bags 
exports.Bag_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bag list'); 
}; 
 
// for a specific Bag. 
exports.Bag_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bag detail: ' + req.params.id); 
}; 
 
// Handle Bag create on POST. 
exports.Bag_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bag create POST'); 
}; 
 
// Handle Bag delete form on DELETE. 
exports.Bag_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bag delete DELETE ' + req.params.id); 
}; 
 
// Handle Bag update form on PUT. 
exports.Bag_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Bag update PUT' + req.params.id); 
}; 