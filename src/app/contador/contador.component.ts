import { Component } from "@angular/core";

@Component ({
	selector: 'app-contador',   //Es el nombre que se empleará en otro lugar para utilizarlo
	templateUrl:'contador.component.html'
})

export class ContadorComponent {
	titulo=  ' Mi proyecto JARL' ;
  numero: number=10;
  base: number = 5;
  acumular(valor: number): void {
    this.numero+=valor;
  }
}
