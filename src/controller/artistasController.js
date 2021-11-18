const ArtistasSchema = require('../models/artistasSchema');
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const artistas = await artistasSchema.find()
        console.log(artistas)
    } catch (error){
        res.status(500).json({
            mensagem: error.message,
        })
    }
}

const getById = async (req, res) => {
    try{
        const idEncontrado = ArtistasSchema.findById(req.params.id)
        console.log(idEncontrado)
        
    }catch(error){
        res.status(500).json({
            message: error.message
        })

    }
}

const createAutor = async (req, res) => {
    try{
    const autor= new ArtistasSchema({
        artista: req.body.artista,
        _id: new.mongoose.Types.ObjectId()

    })
    const autorSalvo = await autor.save()
    res.status(201).json({
        autor: autorSalvo
    })
}
    catch(error) {
    res.status(201).json({
        mensagem: error.message
    })
}
}

module.exports = {
    getAll,
    getById,
    createAutor
    
}