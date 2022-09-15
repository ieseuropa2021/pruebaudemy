import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';//Se debe emplear para crear un módulo
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';


@NgModule({
  //Las declaraciones indican los componentes del módulo
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  //Se indican los módulos que importamos en esta aplicación
  imports: [
    BrowserModule,
    CommonModule //Para cargar las directivas *ngFor,....
  ],
  //Si deseamos que algunos componentes sean visibles fuera de este módulo se declara mediante exports: [ lista de componentes]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
