const express = require('express')
require("dotenv").config();

const app=express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

})



app.get('/',(req,res)=>{
    res.json({mesaj:"merhaba ilk"})
})





app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}. port dinleniyor`)
})
