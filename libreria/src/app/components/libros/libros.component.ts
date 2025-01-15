import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.services';
import { Global } from '../../services/global';
import { Libro } from '../../models/libro';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  imports: [CommonModule, RouterLink, HttpClientModule],
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
        if(response.libro){
          this.libros = response.libro;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}