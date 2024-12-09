const Kullanici= require('../models/kullaniciModel')

const loginKullanıcı= async(req,res)=>{
    res.json({mesaj:'Login işlemi gerçekleştirildi'})
}

const signupKullanıcı= async(req,res)=>{
    const {email,parola} = req.body;

    try {
        const kullanici= await Kullanici.signup(email,parola)
        res.status(200).json({email,kullanici})
        
    } catch (error) {
        res.status(400).json({hata:error.message})
    }

}

module.exports={
    loginKullanıcı,
    signupKullanıcı
} 