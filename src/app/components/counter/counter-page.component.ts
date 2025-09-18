import { Component } from '@angular/core';

@Component({
    
    template: `
    <h1>{{counter}} </h1>
    <h2>Counter Component</h2>
    <button (click)="botonMas()" [disabled]="counter == 0"> + </button>
    <button (click)="botonMenos()" [disabled]="counter == 0"> - </button>
    `,
})

//generar un boton + y un boton -
//bloquear los botones cuando el valor sea 0
export class CounterPageComponent {
    counter = 10;

    botonMas() {
    this.counter++;
  }

  botonMenos() {
    if (this.counter > 0) {
      this.counter--;
        }
    }
}