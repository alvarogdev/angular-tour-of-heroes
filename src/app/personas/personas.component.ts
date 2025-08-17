import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NgIf, UpperCasePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PERSONAS } from '../mock-personas';
import { PersonaDetailComponent } from '../persona-detail/persona-detail.component';
import { PersonaService } from '../persona.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, PersonaDetailComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  selectedPersona?: Persona;
  personas: Persona[] = [];

  constructor(private personaService: PersonaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
    this.messageService.add(`PersonasComponent: Persona seleccionada id=${persona.id}`);
  }

  getPersonas(): void {
    this.personaService
      .getPersonas()
      .subscribe(personas => this.personas = personas);
  }
}
