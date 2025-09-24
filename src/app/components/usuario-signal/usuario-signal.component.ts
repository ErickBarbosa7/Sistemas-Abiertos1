import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-signal',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './usuario-signal.component.html',
  styleUrls: ['./usuario-signal.component.css']
})
export class UsuarioSignalComponent {
  /*
  nombre: string = 'erick barbosa';
  edad: number = 22;

  mostrarModalNombre = false;
  mostrarModalEdad = false;

  nuevoNombre: string = '';
  nuevaEdad: number = this.edad;
*/

  // Usando Signal
  nombre = signal ('erick barbosa');
  edad = signal (21);

  mostrarModalNombre = signal (false);
  mostrarModalEdad = signal (false);

  nuevoNombre = signal ('');
  nuevaEdad = signal (this.edad());
  
  abrirModalNombre() {
    this.nuevoNombre.set(this.nombre());
    this.mostrarModalNombre.set(true);
  }

  cerrarModalNombre() {
    this.mostrarModalNombre.set(false);
  }

  guardarNombre() {
    if (this.nuevoNombre().trim() !== '') {
      this.nombre = this.nuevoNombre;
    }
    this.cerrarModalNombre();
  }

  abrirModalEdad() {
    this.nuevaEdad.set(this.edad());
    this.mostrarModalEdad.set(true);
  }

  cerrarModalEdad() {
    this.mostrarModalEdad.set(false);
  }

  guardarEdad() {
    if (this.nuevaEdad() > 0) {
      this.edad = this.nuevaEdad;
    }
    this.cerrarModalEdad();
  }

  reset() {
    this.nombre.set('erick barbosa');
    this.edad.set(21);
  }
}
