import { NgModule } from '@angular/core';//Se debe emplear para crear un módulo
import { ContadorComponent } from './contador.component';


@NgModule({
  //Las declaraciones indican los componentes del módulo
  declarations: [
    ContadorComponent
  ],
  //Se indican los módulos que importamos en esta aplicación
  //imports: [
    //ContadorComponent
  //],
  //Si deseamos que algunos componentes sean visibles fuera de este módulo se declara mediante exports: [ lista de componentes]
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule { }
