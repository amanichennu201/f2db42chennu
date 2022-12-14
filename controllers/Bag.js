var Bag = require('../models/Bag');
// List of all watches
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

// Handle a show all view
exports.Bag_view_all_Page = async function (req, res) {
    try {
        theBags = await Bag.find();
        res.render('Bag', { title: 'Bag Search Results', results: theBags });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Bag create on POST.
exports.Bag_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Bag();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Bag_type":"goat", "cost":12, "size":"large"}
    document.Bag_type = req.body.Bag_type;
    document.Bag_Name = req.body.Bag_Name;
    document.Bag_cost = req.body.Bag_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific watch.
exports.Bag_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Bag.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle Bag update form on PUT.
exports.Bag_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await watch.findById(req.params.id)
        // Do updates of properties
        if (req.body.Bag_type)
            toUpdate.Bag_type = req.body.Bag_type;
        if (req.body.Bag_cost) toUpdate.Bag_cost = req.body.Bag_cost;
        if (req.body.Bag_Name) toUpdate.Bag_Name = req.body.Bag_Name;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle Bag delete on DELETE.
exports.Bag_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Bag.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Bag_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Bag.findById(req.query.id)
        res.render('Bagdetail',
            { title: 'Bag Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Bag.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Bag_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Bagcreate', { title: 'Bag Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a Bag.
// query provides the id
exports.Bag_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Bag.findById(req.query.id)
        res.render('Bagupdate', { title: 'Bag Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.Bag_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Bag.findById(req.query.id)
        res.render('Bagdelete', {
            title: 'Bag Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};