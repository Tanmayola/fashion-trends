const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: True,
        unique:True
    },
    name: {
       type:String,
       required:True,
    },
    description: {
        type:String,
        require:True,
    },
    productImg:{
        type:String,
        required:True,
    },
    new_price:{
        type:Number,
        required:True,
    },
    old_price:{
        type:Number,
        required:True,
    },
    product_qty:{
        type:Number,
        required:True,
    },
    category:{
        type:String,
        required:True,
    },
    sub_category:{
        type:String,
        required:True,
    },
    rating:{
        type:Number,
        required:True,
    },
    colors:{
        type:String,
        required:True,
    }
});
const productioncollection = mongoose.model("products",ProductSchema);
module.exports = productioncollection;
