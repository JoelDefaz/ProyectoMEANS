import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { Global } from '../../services/global';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  imports: [],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
  providers: [LibroService]
})
export class LibrosComponent {
  public url:string;
  public libros:Libro[];

  constructor{
    this.url = Global.url;
    this.libros = [];
  }
  getLibros(){
    this._libroService.getLibros().
  }
}
.c
