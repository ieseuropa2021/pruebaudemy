import { Injectable} from '@angular/core';
import { Personaje } from '../interfaces/personaje.component';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
];

get personajes(): Personaje[] {
    return [...this._personajes];
}
  constructor(){
    console.log(' Servicio iniciado');
  }

    agregarPersonaje( persona: Personaje ) {
        this._personajes.push( persona );
    }
}
