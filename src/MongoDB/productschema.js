const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_id :{ type : Number,
                  unique : true},
    product_name : String,
    actual_price : Number,
    discount : Number,
    price : Number,
    quantity : Number,
    category : {
        category_id : Number,
        category_name : String }
})

const products = mongoose.model("products",productSchema)

module.exports = products