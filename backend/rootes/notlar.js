const express =require('express')
const notModel=require('../models/noteModel');
const { notOlustur, notlarGetir, notGetir } = require('../controllers/notController');

const router =express.Router();

router.get('/',notlarGetir)


// listele id ye göre listeleme
router.get('/:id',notGetir)


//yeni ekle
router.post('/',notOlustur )


//sil
router.delete('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu sil` })
})

//güncelle
router.patch('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu güncelle` })
})


module.exports=router;