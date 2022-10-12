import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {}

  public getCocktail (): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktail.json")
  }
}
