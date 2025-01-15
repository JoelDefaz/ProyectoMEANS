import { Component } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.services';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Global } from '../../services/global';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detalle-libro',
  imports: [CommonModule,HttpClientModule, RouterLink],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.css',
  standalone: true
})
export class DetalleLibroComponent {
  public url:string;
  public libro:Libro;
  public confirm:boolean;

  constructor(
    private _libroService:LibroService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.url = Global.url;
    this.libro = new Libro("","","","",2030,23,"");
    this.confirm = false;
  }
  ngOnInit(){
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.getLibro(id);
    })
  }
  getLibro(id:String){
    console.log(id)
    this._libroService.getLibro(id).subscribe(
      response=>{
        this.libro=response.libro;
      },
      error=>{
        console.log(error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }
  borrarLibro(id:String){
    this._libroService.deleteLibro(id).subscribe(
      response=>{
        if(response.libro){
          this._router.navigate(['/libro']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
