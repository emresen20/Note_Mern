
const { json } = require('express');
const NotModel=require('../models/noteModel')
const mongoose = require('mongoose')
const express =require('express')


// Not oluşturuan
const notOlustur=async (req,res)=>{
    const {baslik,aciklama}=req.body;

        let bosAlanlar=[]
        if(!baslik){
            bosAlanlar.push('baslik')
        }

        if(bosAlanlar.length>0){
            return res.status(400).json({hata:'Alanalar boş geçilemez',bosAlanlar})
        }

    try{
        const not =await NotModel.create({baslik,aciklama})
        res.status(200).json(not)
    } catch(error){
        res.status(400).json({hata:error.message})
    }
}

//tüm notları getirien 
const notlarGetir= async(req,res)=>{
    const notlar= await NotModel.find().sort({
        createdAt:-1
    })

    res.status(200).json(notlar)
}

const notGetir = async (req, res) => {
    const { id } = req.params; // `req.params` içindeki `id`yi alın

    // ID'nin geçerli olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ hata: 'ID geçersiz' });
    }

    try {
        const not = await NotModel.findById(id); // Veritabanından notu bulun
        if (!not) {
            return res.status(404).json({ hata: 'Not bulunamadı' });
        }
        res.status(200).json(not); // Notu döndür
    } catch (error) {
        res.status(500).json({ hata: 'Bir hata oluştu', detay: error.message });
    }
};

// notu sil

const notSil = async (req, res) => {
    const { id } = req.params; // `req.params` içindeki `id`yi alın

    // ID'nin geçerli olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ hata: 'ID geçersiz' });
    }

    try {
        const not = await NotModel.findOneAndDelete({_id:id}); // Veritabanından notu bulun
        if (!not) {
            return res.status(404).json({ hata: 'Not bulunamadı' });
        }
        res.status(200).json(not); // Notu döndür
    } catch (error) {
        res.status(500).json({ hata: 'Bir hata oluştu', detay: error.message });
    }
};


const notGuncelle = async (req, res) => {
    const { id } = req.params; // `req.params` içindeki `id`yi alın

    // ID'nin geçerli olup olmadığını kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ hata: 'ID geçersiz' });
    }

    try {
        const not = await NotModel.findOneAndUpdate({_id:id},{
            ...req.body
        },{new:true}); // Veritabanından notu bulun
        if (!not) {
            return res.status(404).json({ hata: 'Not bulunamadı' });
        }
        res.status(200).json(not); // Notu döndür
    } catch (error) {
        res.status(500).json({ hata: 'Bir hata oluştu', detay: error.message });
    }
};



module.exports={
    notOlustur,
    notlarGetir,
    notGetir,
    notSil,
    notGuncelle
}