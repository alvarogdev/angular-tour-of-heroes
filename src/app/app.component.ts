// Componente raíz de la aplicación Angular.
// Aquí se definen los componentes principales que se mostrarán en la vista principal.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Título que se muestra en la cabecera de la app.
  title = 'Tour de personas';
}
