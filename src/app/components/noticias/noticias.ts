import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  titulo: string;
  categoria: string;
  descripcion: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-noticias',
  styleUrl: './noticias.css',
  templateUrl: './noticias.html',
})
export class Noticias {
  
categoriaSeleccionada: string = 'Todas';
  terminoActual: string = '';

  noticias: Noticia[] = [
    {
      titulo: 'Inicio del ciclo académico',
      categoria: 'Académicas',
      descripcion: 'Información sobre el inicio de las clases universitarias.'
    },
    {
      titulo: 'Conferencia de tecnología',
      categoria: 'Eventos',
      descripcion: 'Participa en las conferencias y actividades tecnológicas.'
    },
    {
      titulo: 'Nuevos servicios universitarios',
      categoria: 'Institucionales',
      descripcion: 'Conoce los nuevos servicios para los estudiantes.'
    }
  ];

  get categorias(): string[] {
    return [
      'Todas',
      ...new Set(
        this.noticias.map(noticia => noticia.categoria)
      )
    ];
  }

  get noticiasFiltradasPorCategoria(): Noticia[] {
    const termino = this.terminoActual.trim().toLowerCase();

    return this.noticias.filter(noticia => {
      const coincideTexto =
        `${noticia.titulo} ${noticia.categoria} ${noticia.descripcion}`
          .toLowerCase()
          .includes(termino);

      const coincideCategoria =
        this.categoriaSeleccionada === 'Todas' ||
        noticia.categoria === this.categoriaSeleccionada;

      return coincideTexto && coincideCategoria;
    });
  }

  buscar(evento: Event): void {
    const entrada = evento.target as HTMLInputElement;
    this.terminoActual = entrada.value;
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }
}
