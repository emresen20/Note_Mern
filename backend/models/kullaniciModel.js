const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const validator= require('validator')

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


kullaniciSema.statics.signup=async function(email,parola){

    if(!email || !parola){
        throw Error('Alanlar Boş geçilemez')
    }

    if(!validator.isEmail(email)){
        throw Error('Email Kurallara uygun değil')
    }

    if(!validator.isStrongPassword(parola)){
        throw Error('Parola en az 1 büyük harf ve özel karakter içermeli')
    }

    const kontrolKullanici=await this.findOne({email}) // burada this kullaniciSemayı temsil eder
    
    if(kontrolKullanici){
        throw Error('Email zaten kullanılıyor')
    }

    const salt= await bcrypt.genSalt(10)

    const sifrelenmisParola= await bcrypt.hash(parola,salt)

    const kullanici=await this.create({email,parola:sifrelenmisParola})

    return kullanici
}


kullaniciSema.statics.login=async function(email,parola){
    if(!email || !parola){
        throw Error('alanlar boş geçilemez')
    }

    const kullanici=await this.findOne({email})

    if(!kullanici){
        throw Error('Email bulunamadı')
    }

    const parolaKontrol=await bcrypt.compare(parola,kullanici.parola)

    if(!parolaKontrol){
        throw Error('hatalı parola')
    }

    return kullanici
}

module.exports=mongoose.model('Kullanici',kullaniciSema)