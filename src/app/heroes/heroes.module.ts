import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; //Para crear un módulo

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
	//Los componentes de este módulo y que únicamente serán visibles en este módulo
	declarations: [
		HeroeComponent,
		ListadoComponent
	],
	//Si deseamos que algún componente sea visible fuera de este módulo debemos emplear exports
	exports:[
		ListadoComponent,
		HeroeComponent
	],
	//declaramos los otros módulos que necesitamos importar
	imports: [
		CommonModule
	]
})

export class HeroesModule {}
