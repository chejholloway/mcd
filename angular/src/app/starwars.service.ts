import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPeople } from './interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})

export class StarWarsService {
  private BASE_URL = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPeople[]> {
    return this.http.get(this.BASE_URL) as Observable<IPeople[]>;
  }

  searchCharacters(term) {
    const queryURL = 'https://swapi.dev/api/people/?search=';
    return this.http.get(queryURL + term) as Observable<IPeople>;
  }

}
