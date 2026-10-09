import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-facultades',
  styleUrl: './facultades.css',
  templateUrl: './facultades.html',
})
export class Facultades {

  areaSeleccionada = 'Todas';

  facultades = [
    {
      nombre: 'Ingeniería',
      descripcion: 'Tecnología, innovación y desarrollo.',
      area: 'Ingeniería'
    },
    {
      nombre: 'Ciencias de la Empresa',
      descripcion: 'Gestión, administración y negocios.',
      area: 'Negocios'
    },
    {
      nombre: 'Derecho',
      descripcion: 'Formación jurídica y ciudadanía.',
      area: 'Derecho'
    },
    {
      nombre: 'Ciencias de la Salud',
      descripcion: 'Formación relacionada con la salud.',
      area: 'Salud'
    }
  ];

  get facultadesFiltradas() {
    if (this.areaSeleccionada === 'Todas') {
      return this.facultades;
    }

    return this.facultades.filter(
      facultad => facultad.area === this.areaSeleccionada
    );
  }

  filtrar(area: string): void {
    this.areaSeleccionada = area;
  }
}
