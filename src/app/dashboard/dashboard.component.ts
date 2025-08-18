import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }
 getPersonas(): void {
    this.personaService.getPersonas()
      .subscribe(personas => this.personas = personas.slice(1, 5));
  }
  ngOnInit(): void {
    this.getPersonas();
  }

 
}