import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    PaginaInicioComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaInicioComponent
  ]
})
export class DbzModule { }
