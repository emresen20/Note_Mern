const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

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


kullaniciSema.static.signup=async function(email,parola){

    const kontrolKullanici=await this.findOne({email}) // burada this kullaniciSemayı temsil eder
    
    if(kontrolKullanici){
        throw Error('Email zaten kullanılıyor')
    }

    const salt= await bcrypt.genSalt(10)

    const sifrelenmisParola= await bcrypt.hash(parola,salt)

    const kullanici=await this.create({email,parola:sifrelenmisParola})

    return kullanici
}

module.exports=mongoose.model('Kullanici',kullaniciSema)