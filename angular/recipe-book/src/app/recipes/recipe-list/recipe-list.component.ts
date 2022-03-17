import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestRecipe1', 'This is a simple recipe', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2012/10/09/sticky-ginger-cake-ck-x.jpg'),
    new Recipe('TestRecipe2', 'This is a secound simple recipe', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2012/10/09/sticky-ginger-cake-ck-x.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes);
  }

}
