import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';



@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  personajes: Personaje[]=[
		{nombre: 'Goku',
		  poder: 15000
		},
		{nombre: 'Vegeta',
		  poder: 7500
		}
	];

  nuevo: Personaje={
      nombre: 'Nombre padre',
		  poder: 70
  }

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
    }
}
