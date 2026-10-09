import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-admision',
  styleUrl: './admision.css',
  templateUrl: './admision.html',
})
export class Admision {
  mostrarPasos = false;

  cambiarPasos(): void {
    this.mostrarPasos = !this.mostrarPasos;
  }

  pasos = [
    'Elegir la carrera de interés.',
    'Consultar los requisitos de admisión.',
    'Revisar las fechas y modalidades de ingreso.',
    'Seguir las indicaciones del canal oficial.'
  ];
}
