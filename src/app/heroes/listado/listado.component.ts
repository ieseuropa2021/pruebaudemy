import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  misheroes   :string[]=['Spiderman','El Zorro','Capitán América','Lucky Luck','Hulk'];
  heroeBorrado: string = '';
  borrarHeroe(numero: number): void{
    this.heroeBorrado= (this.misheroes.length>0) ? this.misheroes[numero] : '';
    this.misheroes.splice(numero,1);
  }

}
