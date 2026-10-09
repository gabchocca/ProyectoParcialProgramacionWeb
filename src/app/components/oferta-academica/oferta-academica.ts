import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Carrera {
  nombre: string;
  area: string;
  descripcion: string;
  imagen: string;
  enlace: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-oferta-academica',
  styleUrl: './oferta-academica.css',
  templateUrl: './oferta-academica.html',
})
export class OfertaAcademica {

  busqueda = '';

  carreras: Carrera[] = [
    {
      nombre: 'Ingeniería de Sistemas',
      area: 'Tecnología',
      descripcion: 'Software, sistemas de información e innovación tecnológica.',
      imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80',
      enlace: 'https://ucontinental.edu.pe/'
    },
    {
      nombre: 'Administración',
      area: 'Negocios',
      descripcion: 'Gestión empresarial, liderazgo y emprendimiento.',
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80',
      enlace: 'https://ucontinental.edu.pe/'
    },
    {
      nombre: 'Ingeniería Industrial',
      area: 'Ingeniería',
      descripcion: 'Procesos, productividad y gestión de operaciones.',
      imagen: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80',
      enlace: 'https://ucontinental.edu.pe/'
    }
  ];

  get carrerasFiltradas(): Carrera[] {
    const termino = this.busqueda.trim().toLowerCase();

    return this.carreras.filter(carrera =>
      `${carrera.nombre} ${carrera.area} ${carrera.descripcion}`
        .toLowerCase()
        .includes(termino)
    );
  }

  limpiarBusqueda(): void {
    this.busqueda = '';
  }
}
