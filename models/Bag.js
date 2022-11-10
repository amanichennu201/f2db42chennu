const mongoose = require("mongoose") 
const BagSchema = mongoose.Schema({ 
 Bag_type: String, 
 Bag_Name: String, 
 Bag_cost: Number 
}) 
 
module.exports = mongoose.model("Bag", 
BagSchema) 