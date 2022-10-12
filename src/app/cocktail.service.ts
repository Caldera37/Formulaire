import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailList: Cocktail[]= [
    new Cocktail ("",0,""),
    new Cocktail ("",0,""),
    new Cocktail ("",0,"")


  ];

  constructor() { }

  public getCocktail (): Cocktail[] {
    return this.cocktailList;
  }
}
