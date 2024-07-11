require("dotenv").config();
const express = require("express");
const Rota = require("./Routes/rota");


const app = express();

app.use(Rota);

app.listen(4000,()=>{
    console.log("ai")
})