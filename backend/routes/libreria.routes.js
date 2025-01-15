var express = require('express');
var router = express.Router();
var libroController = require('../controllers/libro.controller')
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir : './uploads'});
//PAGINA DE INICIO
router.get('/inicio',libroController.inicio);
//VER
router.get('/libros',libroController.getLibros);
//GUARDAR
router.post('/guardar-libro',libroController.saveLibro);
//VER UN LIBRO
router.get('/libro/:id',libroController.getLibro);
//ACTUALIZAR
router.put('/actualizar-libro/:id',libroController.updateLibro);
//ELIMINAR
router.delete('/delete-libro/:id',libroController.deleteLibro);
//SUBIR IMAGEN
router.post('/subir-imagen/:id', multipartyMiddleware,libroController.uploadImagen);
//RECUPERAR IMAGEN
router.get('/get-imagen/:imagen',libroController.getImagen);

module.exports = router