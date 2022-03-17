import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'TestRecipe1',
            'This is a simple recipe',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2012/10/09/sticky-ginger-cake-ck-x.jpg',
            [
                new Ingredient('Abc',3),
                new Ingredient('Def',1),
                new Ingredient('Ghi',2),
                new Ingredient('Jkl',1),
            ]
        ),
        new Recipe(
            'TestRecipe2',
            'This is a secound simple recipe',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2012/10/09/sticky-ginger-cake-ck-x.jpg',
            [
                new Ingredient('Xyz',1),
                new Ingredient('Opl',2),
                new Ingredient('Nwm',20),
            ]
        )
    ];

    constructor(
        private shoppingListService: ShoppingListService
    ) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}