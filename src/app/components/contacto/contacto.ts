import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  nombre = '';
  correo = '';
  consulta = '';

  mensaje = '';
  enviado = false;

  enviarFormulario(): void {
    this.enviado = false;
    this.mensaje = '';

    if (
      !this.nombre.trim() ||
      !this.correo.trim() ||
      !this.consulta.trim()
    ) {
      this.mensaje = 'Completa todos los campos.';
      return;
    }

    const correoValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo.trim());

    if (!correoValido) {
      this.mensaje = 'Ingresa un correo electrónico válido.';
      return;
    }

    this.enviado = true;
    this.mensaje =
      'Validación correcta. Tu consulta está preparada, pero aún no se ha enviado a la universidad.';
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.correo = '';
    this.consulta = '';
    this.mensaje = '';
    this.enviado = false;
  }
}
