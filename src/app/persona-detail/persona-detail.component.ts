import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-detail.component.html',
  styleUrl: './persona-detail.component.css'
})
export class PersonaDetailComponent {
  @Input() persona?: Persona;
}
