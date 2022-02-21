import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

// getAllCharacters(query = '', page = 1 ): Observable<Character[]>{
  // const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`;
  getAllCharacters(): Observable<Character[]>{
  return this.http.get<Character[]>(`${environment.baseUrlApi}`);
}

getCharacterByDetail(id: number){
  return this.http.get<Character>(`${environment.baseUrlApi}${id}`);
}

}

