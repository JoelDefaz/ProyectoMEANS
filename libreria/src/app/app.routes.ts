import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';

export const appRoutes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'guardar-libro', component: CrearLibroComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'libro/:id', component: DetalleLibroComponent },
    { path: 'editar-libro/:id', component: EditarLibroComponent },
    { path: '**', component: HomeComponent }
  ];