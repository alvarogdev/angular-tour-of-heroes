// Componente que muestra los mensajes generados por la aplicación.
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  // El servicio se inyecta como público para poder acceder a los mensajes desde la plantilla
  constructor(public messageService: MessageService) { }
}
