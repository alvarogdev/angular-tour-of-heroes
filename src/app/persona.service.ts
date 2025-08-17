import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';
import { PERSONAS } from './mock-personas';

@Injectable({ providedIn: 'root' })
export class PersonaService {
  getPersonas(): Observable<Persona[]> {
    return of(PERSONAS);
  }
}
