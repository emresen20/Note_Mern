

const loginKullanıcı= async(req,res)=>{
    res.json({mesaj:'Login işlemi gerçekleştirildi'})
}

const signupKullanıcı= async(req,res)=>{
    res.json({mesaj:'Signup işlemi gerçekleştirildi'})

}

module.exports={
    loginKullanıcı,
    signupKullanıcı
} 