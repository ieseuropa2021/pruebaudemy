import { Component } from '@angular/core';
/*Le estamos diciendo que importe el componente Component del fichero @angular/core"    */

/* Decorador del componente  Component, en el que indicamos cómo podemos seleccionarlo en nuestra aplicación(selector). En este caso, será con la etiqueta "app-root" que es la que aparece en index.html. Normalmente se establece como regla que el nombre sea app- seguido del nombre del archivo en el que se declara:  nombrearchivo.component.ts
Además especificamos cuál es el archivo html que está asociado a este componente. La asociación puede ser con la dirección URL  del archivo(templateUrl) que se empleará o bien con el código HTML entre comillas  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
/*
La otra posibilidad es indicar   template:  ' código HTML que sustituye al fichero  app.component.html'  o bien con varias líneas de código con las otras comillas `     código en varias líneas `
*/

export class AppComponent {

}
/* Muestra por defecto el nombre de nuestro proyecto al crearlo. En realidad, se tiene una clase con una propiedad (title) que se puede emplear en cualquier parte de mi código. Por ejemplo, si en app.component.html añadimos   <h3>Ejemplo de uso de una propiedad de la clase Component  {{ title}} <h3>, se mostrará su valor. No obstante, se puede modificar dicha propiedad por el nombre que consideremos oportuno.  */
