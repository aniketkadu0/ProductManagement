const product = require("./productschema"); 
const productRouter = require("express").Router()

productRouter.post("/product", (req , res) =>{
    const productData = req.body;
    product.create(productData).then((newproduct) => {
        res.json(newproduct)
    })
    .catch((err) => {
        console.log(err)
        res.json("fail to create new record")
    })
})

productRouter.get("/product/details", (req , res) =>{
    product.find({}).then((product) =>{
        res.json(product)
    }).catch(err => {
        console.log(err)
        res.json("Interval server error")
    })
})

productRouter.put("/product/update", (req , res) =>{
    const { product_id ,    
            product_name,
            actual_price,
            discount,
            price,
            quantity,
            category } = req.body;
    product.updateOne({ product_id }, {    
        product_name,
        actual_price,
        discount,
        price,
        quantity,
        category})
    .then((newproduct) => {
        res.json(newproduct)
    })
    .catch((err) => {
        console.log(err)
        res.json("fail to update record")
    })
})

productRouter.put("/product/id", (req , res) =>{
    const id = req.body.productid;
    product.findOne({product_id : id}).then(product =>{
        res.json(product)
    }).catch(err =>{
        console.log(err)
        res.json("Internal server error")
    })
})

module.exports = productRouter