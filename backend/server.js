const express = require('express')
require("dotenv").config();
const notRoute=require('./rootes/notlar')
const mongoose=require('mongoose')

const app=express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

})
// connect Db
mongoose.connect('mongodb://localhost/notes-db')
    .then(() => {
        console.log('Veritabanı bağlandı');
        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT}. port dinleniyor`);
        });
    })
    .catch(err => {
        console.error('Veritabanına bağlanırken hata oluştu:', err);
    });



app.use(express.json())
app.use('/api/notlar',notRoute)




