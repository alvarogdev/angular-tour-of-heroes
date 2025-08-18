// Componente que muestra la lista de personas y permite seleccionar una.
// Utiliza servicios para obtener datos y mostrar mensajes.
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../mock-personas';
import { PersonaService } from '../persona.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})

export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas()
      .subscribe(personas => this.personas = personas);
  }

 add(nombre: string, apellido: string): void {
  nombre = nombre.trim();
  apellido = apellido.trim();
  if (!nombre || !apellido) { return; }
  this.personaService.addPersona({ nombre, apellido } as Persona)
    .subscribe(persona => {
      this.personas.push(persona);
    });
}

delete(persona: Persona): void {
  this.personas = this.personas.filter(p => p !== persona);
  this.personaService.deletePersona(persona.id).subscribe();
}
}

