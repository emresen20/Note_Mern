const express =require('express')
const notModel=require('../models/noteModel');
const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController');
const authKonrol=require('../middlewares/authKontrol')

const router =express.Router();

router.use(authKonrol)

router.get('/',notlarGetir)


// listele id ye göre listeleme
router.get('/:id',notGetir)


//yeni ekle
router.post('/',notOlustur )


//sil
router.delete('/:id',notSil)

//güncelle
router.patch('/:id',notGuncelle)


module.exports=router;