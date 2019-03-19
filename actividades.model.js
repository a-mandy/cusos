'use strict';
let mongoose = require('mongoose');

let actividadSchema = new mongoose.Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true }
});

module.exports = mongoose.model('Actividades',actividadSchema);
