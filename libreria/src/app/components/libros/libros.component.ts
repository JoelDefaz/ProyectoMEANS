import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { Global } from '../../services/global';
import { Libro } from '../../models/libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  imports: [CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
  providers: [LibroService]
})
export class LibrosComponent implements OnInit{
  public url:string;
  public libros:Libro[];

  constructor(
    private _libroService: LibroService
  ){
    this.url = Global.url;
    this.libros = [];
  }
  ngOnInit(): void {
    this.getLibros();
  }
  getLibros(){
    this._libroService.getLibros().subscribe(
      response => {
        if(response.libros){
          this.libros = response.libros;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}