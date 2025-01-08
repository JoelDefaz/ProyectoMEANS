var express = require('express');
var router = express.Router();
var libroController = require('../controllers/libro.controller')
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir : './uploads'});
//PAGINA DE INICIO
router.get('',libroController.inicio);
//VER
//GUARDAR
//VER
//ACTUALIZAR
//ELIMINAR
//SUBIR IMAGEN
//RECUPERAR IMAGEN
module.exports = router