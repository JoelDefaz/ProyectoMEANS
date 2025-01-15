var Libro=require('../models/libro');
var fs=require('fs');
var path = require('path');

var controller = {
    inicio: function(req,res) {
        return res.status(200).send({message: "<h1>  Hola 2</h1>"})
    },
    getLibros: async function(req, res) {
        try {
            var libroStored = await Libro.find();
    
            if (!libroStored || libroStored.length === 0) {
                return res.status(404).send({ message: 'No se obtuvo ningun dato' });
            
            }
            return res.status(200).send({ libro: libroStored });
        } catch (error) {
            return res.status(500).send({ message: 'Error al obtener los datos', error });
        }
    },
    saveLibro: async function (req,res) {
        try 	{
            var libro = new Libro();
            var params=req.body;
            libro.nombre=params.nombre;
            libro.autor=params.autor;
            libro.edicion=params.edicion;
            libro.anio=params.anio;
            libro.precio=params.precio;
            
            libro.imagen=null;
            
            var libroStored=await libro.save();
            if(!libroStored) {
                return res.status(404).send({message:'No se guardó el libro'});
            }
            return res.status(201).send({libro:libroStored});
        } catch (error) {
            return res.status(500).send({message:'Error al guardar los datos'});
        }
    },
    getLibro: async function(req, res) {
        try {
            var id = req.params.id;
    
            var libroStored = await Libro.findById(id);
    
            if (!libroStored) {
                return res.status(404).send({ message: 'No se obtuvo ningun dato' });
            }
    
            return res.status(200).send({ libro: libroStored });
        } catch (error) {
            // En caso de error en la consulta, retornamos un error 500
            return res.status(500).send({ message: 'Error al obtener los datos', error });
        }
    },    
    updateLibro: async function (req, res) {
        try {
            var id = req.params.id;
            var params = req.body;
    
            var libroStored = await Libro.findByIdAndUpdate(
                id, 
                {
                    nombre: params.nombre,
                    autor: params.autor,
                    edicion: params.edicion,
                    anio: params.anio,
                    precio: params.precio,
                    imagen: null
                },
                { new: true }
            );

            if (!libroStored) {
                return res.status(404).send({ message: 'No se encontró el libro' });
            }
                return res.status(200).send({ libro: libroStored });
        } catch (error) {
            return res.status(500).send({ message: 'Error al actualizar los datos', error });
        }
    },
    deleteLibro: async function (req, res) {
        try {
            var id = req.params.id;
            var libroDeleted = await Libro.findByIdAndDelete(id);
    
            if (!libroDeleted) {
                return res.status(404).send({ message: 'No se encontró el libro para eliminar' });
            }
    
            return res.status(200).send({ message: 'Libro eliminado exitosamente', libro: libroDeleted });
        } catch (error) {
            return res.status(500).send({ message: 'Error al eliminar el libro', error });
        }
    },
    uploadImagen:async function(req,res){
        try {
          var libroId=req.params.id;
          var fileName='Imagen no subida';
          if(req.files){
            var filePath=req.files.imagen.path;
            var fileSplit=filePath.split('\\');
            fileName=fileSplit[1];
            var extSplit=fileName.split('.');
            var fileExt=extSplit[1];
            if(fileExt==='png' || fileExt==='jpg' || fileExt==='jpeg' || fileExt==='gif'|| fileExt==='PNG'){
              var libroUpdated= await Libro.findByIdAndUpdate(libroId,{imagen:fileName},{new:true});
              if(!libroUpdated) return res.status(404).send({message:'El libro no existe y no se puede subir la imagen'});
              return res.status(200).send({libro:libroUpdated});
            }else{
              fs.unlink(filePath,(err)=>{
                return res.status(200).send({message:'Extensión no válida'});
              });
            }
          }else{
            return res.status(200).send({message: fileName});
          }
        } catch (err) {
          return res.status(500).send({ message: 'La imagen no se ha subido' });
        }
      },
      getImagen:async function(req,res){
        try {
          var file=req.params.imagen;
          var path_file="./uploads/"+file;
    
          var exists=await fs.promises.access(path_file)
          .then(()=>true)
          .catch(()=>false);
          if(exists) return res.sendFile(path.resolve(path_file));
          else return res.status(200).send({message:'La imagen no existe'});
        } catch (err) {
          return res.status(500).send({ message: 'Error al recuperar la imagen' });
        }
      }
}

module.exports=controller;