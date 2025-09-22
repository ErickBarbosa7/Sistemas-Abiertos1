import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, TitleCasePipe],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre: string = 'erick barbosa';
  edad: number = 22;

  mostrarModalNombre = false;
  mostrarModalEdad = false;

  nuevoNombre: string = '';
  nuevaEdad: number = this.edad;

  abrirModalNombre() {
    this.nuevoNombre = this.nombre;
    this.mostrarModalNombre = true;
  }

  cerrarModalNombre() {
    this.mostrarModalNombre = false;
  }

  guardarNombre() {
    if (this.nuevoNombre.trim() !== '') {
      this.nombre = this.nuevoNombre;
    }
    this.cerrarModalNombre();
  }

  abrirModalEdad() {
    this.nuevaEdad = this.edad;
    this.mostrarModalEdad = true;
  }

  cerrarModalEdad() {
    this.mostrarModalEdad = false;
  }

  guardarEdad() {
    if (this.nuevaEdad > 0) {
      this.edad = this.nuevaEdad;
    }
    this.cerrarModalEdad();
  }

  reset() {
    this.nombre = 'erick barbosa';
    this.edad = 22;
  }
}
