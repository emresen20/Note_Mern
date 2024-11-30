const express = require('express')
require("dotenv").config();
const notRoute=require('./rootes/notlar')

const app=express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

})


app.use(express.json())
app.use('/api/notlar',notRoute)



app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}. port dinleniyor`)
})
