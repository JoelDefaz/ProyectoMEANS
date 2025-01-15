import { Component, ViewChild } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { CargarService } from '../../services/cargar.services';
import { Libro } from '../../models/libro';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-libro',
  imports: [],
  templateUrl: './crear-libro.component.html',
  styleUrl: './crear-libro.component.css'
})
export class CrearLibroComponent {
  public titulo:string;
  public libro:Libro;
  public libroGuardar:Libro;
  public url:string;
  public status:string;
  public idGuardado:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any
  constructor(
    private _libroService:LibroService,
    private _cargarService:CargarService
  ){
    this.titulo = "GUARDAR LIBRO";
    this.url = Global.url;
    this.libro = new Libro("","","","",2030,23,"");
    this.libroGuardar = new Libro("","","","",2030,23,"");
    this.status = "";
    this.idGuardado = "";
    this.archivosParaCargar = [];
  }

  guardarLibro(form:NgForm){
    this._libroService.guardarLibro(this.libro).subscribe(
      response=>{
        if(response.libro){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.libro._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.libroGuardar=result.response;
              this.status="success";
              console.log(response.libro._id);
              this.idGuardado=response.libro._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.status='failed';
          }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
