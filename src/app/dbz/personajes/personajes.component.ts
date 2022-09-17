import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

@Input() personajesH: Personaje[]=[];

}
