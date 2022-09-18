import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';//Se debe emplear para crear un módulo
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


import { DbzService } from './dbz/services/dbz.service';




@NgModule({
  //Las declaraciones indican los componentes del módulo
  declarations: [
    AppComponent,
  ],
  //Se indican los módulos que importamos en esta aplicación
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    DbzModule,
    CommonModule //Para cargar las directivas *ngFor,....
  ],
  //Si deseamos que algunos componentes sean visibles fuera de este módulo se declara mediante exports: [ lista de componentes]
  providers: [
    DbzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
