const express = require('express')

const app=express();


app.get('/',(req,res)=>{
    res.json({mesaj:"merhaba ilk"})
})





app.listen(4000,()=>{
    console.log('4000.port dinleniyor')
})