import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    //console.log(this.recipe);
  }

  onSelectedRecipe(recipe: Recipe) {
    //this.recipeSelected.emit(recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
