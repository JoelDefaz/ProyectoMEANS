import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'libro/:id', component: DetalleLibroComponent },
  { path: 'editar-libro/:id', component: EditarLibroComponent },
  { path: '**', component: HomeComponent }
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreria';
}
