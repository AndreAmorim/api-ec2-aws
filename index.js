const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

app.get("/", (req,res)=> {
    res.json({msg:'Sucesso'});
});


app.get("/teste", (req,res)=> {
    res.json({msg:'teste'});
});

app.listen(3000, ()=>{
    console.log("Server runnig on port 3000");
});
