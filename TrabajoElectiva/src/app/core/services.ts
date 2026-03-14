import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './models/characters';

@Injectable({
  providedIn: 'root',
})
export class Services {
    constructor(private http: HttpClient) {}

  getCharacters(page: number = 1) : Observable<Characters> {
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }

  getcharacterById(id: number) : Observable<any> {
    return this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
