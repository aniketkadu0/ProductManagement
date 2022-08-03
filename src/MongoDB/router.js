const productRouter = require("./productRouter");
const router = require("express").Router()

router.use("/", adminAuth, productRouter)

function adminAuth(req, res, callback){
   if(req.headers.auth === "cdac-student"){
      callback();
   }else {
      res.status(401).json("Unauthorised")
   }
}

module.exports = router