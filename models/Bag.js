const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
    Bag_type: {type:String,minLength: 2},     
    Bag_Name: {type:String},
    Bag_cost: { type: Number, min: 10, max: 1000 }
}) 
 
module.exports = mongoose.model("Bag", bagSchema)
