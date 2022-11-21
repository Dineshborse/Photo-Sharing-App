const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    name: String,
    image: String,
    image_name: String,
    description: String,
    date: String,
    available_quantity: Number,
    weight: Number,
    v_weight: Number,
    price: Number
});

const inventoryInfo = mongoose.model("inventoryInfo", inventorySchema);

module.exports = inventoryInfo;