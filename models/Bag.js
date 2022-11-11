const mongoose = require("mongoose")
const bagSchema = mongoose.Schema({
Bag_type: String,
Bag_Name: String,
cost: Number
})
module.exports = mongoose.model("Bag",
bagSchema)