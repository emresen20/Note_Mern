const express =require('express')
const notModel=require('../models/noteModel');
const { notOlustur } = require('../controllers/notController');

const router =express.Router();

router.get('/',(req,res)=>{
    res.json({msg:'Bütün Notlar'})
})


// listele
router.get('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu getir` })
})


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