const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/cdac", (err) => {
    if(!err) console.log("MongoDB is connected")
    else console.log("MongoDB is not connected")
})

module.exports = mongoose