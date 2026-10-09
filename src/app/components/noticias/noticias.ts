import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-noticias',
  styleUrl: './noticias.css',
  templateUrl: './noticias.html',
})
export class Noticias {
  
categoriaSeleccionada = 'Todas';

get categorias(): string[] {
  return [
    'Todas',
    ...new Set(this.noticias.map(noticia => noticia.categoria))
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

terminoActual = '';

buscar(evento: Event): void {
  const entrada = evento.target as HTMLInputElement;
  this.terminoActual = entrada.value;
}

seleccionarCategoria(categoria: string): void {
  this.categoriaSeleccionada = categoria;
}
}
