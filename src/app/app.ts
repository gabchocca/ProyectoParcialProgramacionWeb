import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccesosRapidos } from './components/accesos-rapidos/accesos-rapidos';
import { Admision } from './components/admision/admision';
import { Contacto } from './components/contacto/contacto';
import { Facultades } from './components/facultades/facultades';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Modalidades } from './components/modalidades/modalidades';
import { Navbar } from './components/navbar/navbar';
import { Noticias } from './components/noticias/noticias';
import { OfertaAcademica } from './components/oferta-academica/oferta-academica';
import { Servicios } from './components/servicios/servicios';
import { Universidad } from './components/universidad/universidad';

@Component({
  imports: [RouterOutlet, AccesosRapidos, Admision, Contacto, Facultades, Footer, Header, Hero, Modalidades, Navbar, Noticias, OfertaAcademica, Servicios, Universidad],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');
}
