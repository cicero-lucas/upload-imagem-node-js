const express = require("express");

const Rota = express.Router();

const uploads = require('../middlewares/uploadsImg');
const { updateSite, home } = require("../Controllers/siteControllers");

Rota.get("/",home);
    
Rota.post("/up", uploads.single('image'),updateSite);



module.exports=Rota