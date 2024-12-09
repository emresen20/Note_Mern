const express =require('express')
const {loginKullanıcı,signupKullanıcı}=require('../controllers/kullaniciController')

const router =express.Router();

router.post('/login',loginKullanıcı)
router.post('/signup',signupKullanıcı)



module.exports=router;

