
const NotModel=require('../models/noteModel')

const notOlustur=async (req,res)=>{
    const {baslik,aciklama}=req.body;

    try{
        const not =await NotModel.create({baslik,aciklama})
        res.status(200).json(not)
    } catch(error){
        res.status(400).json({hata:error.message})
    }
}

module.exports={
    notOlustur
}