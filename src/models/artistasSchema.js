const mongoose = require('mongoose');

const artistasSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    artistasSchema:{
    
        type: String,
        likes:Number,
        deslikes: Number
    },
    criadoEm:{
        type: Date,
    }
      

})

module.exports = mongoose.model("artistas", artistasSchema)