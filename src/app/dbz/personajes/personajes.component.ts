import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

// @Input() personajes: Personaje[] = [];
get personajes(): Personaje[] {
  return this.vardbzservice.personajes;
}
constructor(private vardbzservice: DbzService) {
};

}
