// Componente que muestra y permite editar los detalles de una persona seleccionada.
import { Component, Input } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonaService } from '../persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrl: './persona-detail.component.css'
})
export class PersonaDetailComponent {
  // Recibe la persona seleccionada desde el componente padre
  @Input() persona?: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id)
      .subscribe(persona => this.persona = persona);
  }

save(): void {
  if (this.persona) {
    this.personaService.updatePersona(this.persona)
      .subscribe(() => this.goBack());
  }
}
  goBack(): void {
    throw new Error('Method not implemented.');
  }



}
