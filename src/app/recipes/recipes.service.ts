import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Steak',
      'Steak Description',
      'https://www.seriouseats.com/thmb/lBAvOl5D32f_fge1kx8Asver10Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg',
      [new Ingredient('Beef Steak', 2), new Ingredient('BBQ Sauce', 1)],
    ),
    new Recipe(
      'Test Recipe Name 2',
      'Test Recipe Description 2',
      'https://cdn.lifehacker.ru/wp-content/uploads/2018/04/Pasta_1523360590-1280x640.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Minced Meat', 1),
        new Ingredient('Tomato Sauce', 1),
      ],
    ),

  ]

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}
