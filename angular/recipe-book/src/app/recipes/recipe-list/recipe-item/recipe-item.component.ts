import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe);
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
