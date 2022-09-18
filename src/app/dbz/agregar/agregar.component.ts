import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  //@Output() onNuevoPersonajeH: EventEmitter<Personaje> = new EventEmitter();
  @Input() nuevoA: Personaje = {
		nombre:'Indicado en agregar',
		poder: 0
	}

  constructor( private adbzService: DbzService ) {}

  agregar() {
		if (this.nuevoA.nombre.trim().length === 0) {
			return;
		}

		//this.onNuevoPersonajeH.emit(this.nuevoA);
    this.adbzService.agregarPersonaje( this.nuevoA );

		this.nuevoA={
		  nombre:'Indicado en agregar',
		  poder: 0
		};
	}

}
