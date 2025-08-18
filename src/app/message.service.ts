// Servicio global para almacenar y gestionar mensajes de la aplicación.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // Array donde se guardan los mensajes
  messages: string[] = [];

  // Añade un mensaje al array
  add(message: string) {
    this.messages.push(message);
  }

  // Limpia todos los mensajes
  clear() {
    this.messages = [];
  }
}