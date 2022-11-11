var Bag = require('../models/Bag');
// List of all Bags
exports.Bag_list = async function (req, res) {
    try {
        theBags = await Bag.find();
        res.send(theBags);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Bag.
exports.Bag_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Bag.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Bag create on POST.
exports.Bag_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Bag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bag_type":"safari", "cost":1200, "bag_Name":"plastic"}
    document.Bag_type = req.body.Bag_type;
    document.Bag_Name = req.body.Bag_Name;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Bag delete form on DELETE.
exports.Bag_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Bag delete DELETE ' + req.params.id);
};
// Handle Bag update form on PUT.
exports.Bag_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Bag update PUT' + req.params.id);
};

//VIEWS
//Handle a show all view
exports.bag_view_all_Page = async function (req, res) {
    try {
        theBags = await Bag.find();
        res.render('Bags', { title: 'Bag Search Results', results: theBags });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};