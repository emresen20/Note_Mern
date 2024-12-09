const mongoose=require('mongoose')

const Sema=mongoose.Schema




const kullaniciSema= new Sema({
    email:{
        type:String,
        required:true, 
        unique:true
       },
       parola:{
        type:String,
        required:true, 
       }
})

module.exports=mongoose.model('Kullanici',kullaniciSema)