const express = require("express")
const router = require("./router")
const cors = require("cors")
const db = require("./database")
const app = express()
const port = 8080
const bodyparser = require("body-parser")

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
app.use("/",router)

app.listen(port,(err)=>{
    if(!err) console.log("Server is running on port :" + port)
})

