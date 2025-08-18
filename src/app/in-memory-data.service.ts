import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const personas = [
      { id: 12, nombre: 'Juan', apellido: 'Pérez' },
      { id: 13, nombre: 'Ana', apellido: 'García' },
      { id: 14, nombre: 'Luis', apellido: 'Martínez' },
      { id: 15, nombre: 'María', apellido: 'López' },
      { id: 16, nombre: 'Carlos', apellido: 'Sánchez' },
      { id: 17, nombre: 'Lucía', apellido: 'Fernández' },
      { id: 18, nombre: 'Pedro', apellido: 'Ramírez' },
      { id: 19, nombre: 'Sofía', apellido: 'Torres' },
      { id: 20, nombre: 'Miguel', apellido: 'Ruiz' }
    ];
    return { personas };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(personas: Persona[]): number {
    return personas.length > 0 ? Math.max(...personas.map(persona => persona.id)) + 1 : 11;
  }
}