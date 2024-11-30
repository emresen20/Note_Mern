const express =require('express')
const notModel=require('../models/noteModel')

const router =express.Router();

router.get('/',(req,res)=>{
    res.json({msg:'Bütün Notlar'})
})


// listele
router.get('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu getir` })
})


//yeni ekle
router.post('/', async (req,res)=>{
    const {baslik,aciklama}=req.body

    try{
        const not =await notModel.create({baslik,aciklama})
        res.status(200).json(not)
    } catch(error){
        res.status(400).json({hata:error.message})
    }
})


//sil
router.delete('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu sil` })
})

//güncelle
router.patch('/:id',(req,res)=>{
    res.json({msg:`${req.params.id} id li notu güncelle` })
})


module.exports=router;