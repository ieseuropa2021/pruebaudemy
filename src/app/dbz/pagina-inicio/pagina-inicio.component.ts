import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';



@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {


  nuevo: Personaje={
      nombre: 'Nombre padre',
		  poder: 70
  }
  constructor() {}
}
