import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonasComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour de personas';

}
