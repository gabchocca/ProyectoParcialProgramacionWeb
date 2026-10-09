import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-modalidades',
  styleUrl: './modalidades.css',
  templateUrl: './modalidades.html',
})
export class Modalidades {
  modalidadSeleccionada = 'Presencial';

  modalidades = [
    {
      nombre: 'Presencial',
      descripcion:
        'Experiencia formativa con actividades e interacción en espacios universitarios.'
    },
    {
      nombre: 'A distancia',
      descripcion:
        'Experiencia formativa apoyada en recursos y herramientas digitales.'
    }
  ];

  get modalidadActual() {
    return this.modalidades.find(
      modalidad => modalidad.nombre === this.modalidadSeleccionada
    );
  }

  seleccionarModalidad(nombre: string): void {
    this.modalidadSeleccionada = nombre;
  }
}
