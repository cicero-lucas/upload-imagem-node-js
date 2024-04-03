const express = require("express");

const Rota = express.Router();

const uploads = require('../middlewares/uploadsImg');
const { updateSite } = require("../Controllers/siteControllers");

Rota.get("/",(req,res)=>{
    return res.json({
        "menhsagem":"get"
    });
})
Rota.post("/up", uploads.single('image'),updateSite);



module.exports=Rota