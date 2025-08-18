// Servicio que gestiona la obtención de datos de personas.
// Aquí se simula una petición HTTP devolviendo un observable.
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';
import { PERSONAS } from './mock-personas';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonaService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { } // <-- Inyección aquí

  private personasUrl = 'api/personas';  // URL to web api

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/** GET heroes from the server */
getPersonas(): Observable<Persona[]> {
  return this.http.get<Persona[]>(this.personasUrl)
    .pipe(
      tap(_ => this.log('fetched personas')),
      catchError(this.handleError<Persona[]>('getPersonas', []))
    );
}

/** GET hero by id. Will 404 if id not found */
getPersona(id: number): Observable<Persona> {
  const url = `${this.personasUrl}/${id}`;
  return this.http.get<Persona>(url).pipe(
    tap(_ => this.log(`fetched persona id=${id}`)),
    catchError(this.handleError<Persona>(`getPersona id=${id}`))
  );
}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server */
updatePersona(persona: Persona): Observable<any> {
  return this.http.put(this.personasUrl, persona, this.httpOptions).pipe(
    tap(_ => this.log(`updated persona id=${persona.id}`)),
    catchError(this.handleError<any>('updatePersona'))
  );
}

/** POST: add a new hero to the server */
addPersona(persona: Persona): Observable<Persona> {
  return this.http.post<Persona>(this.personasUrl, persona, this.httpOptions).pipe(
    tap((newPersona: Persona) => this.log(`added hero w/ id=${newPersona.id}`)),
    catchError(this.handleError<Persona>('addHero'))
  );
}

/** DELETE: delete the hero from the server */
deletePersona(id: number): Observable<Persona> {
  const url = `${this.personasUrl}/${id}`;

  return this.http.delete<Persona>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted persona id=${id}`)),
    catchError(this.handleError<Persona>('deletePersona'))
  );
}

/* GET heroes whose name contains search term */
searchPersonas(term: string): Observable<Persona[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Persona[]>(`${this.personasUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found personas matching "${term}"`) :
       this.log(`no personas matching "${term}"`)),
    catchError(this.handleError<Persona[]>('searchPersonas', []))
  );
}
}
