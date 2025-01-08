var moongose = require('mongoose');
var Schema = mongoose.Schema;
var LibroSchema = Schema({
    nombre : String,
    autor: String,
    edicion : String,
    anio : Number,
    precio : Number,
    imagen : String
});

module.exports=moongose.model('Libro',LibroSchema)