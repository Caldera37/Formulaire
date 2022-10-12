import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  
  cocktailList: Cocktail[]= [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktail().subscribe(cocktailsFromJsonFile => {
    this.cocktailList = cocktailsFromJsonFile;
    console.log(this.cocktailList)
    console.log(cocktailsFromJsonFile)
    }) ;
  }
}
