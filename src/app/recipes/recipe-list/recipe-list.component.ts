import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  // recipes: Array<Recipe> = [] ---> the same approach, use that that more convenient
  recipes: Recipe[] = [
    new Recipe('Test Recipe Name', 'Test Recipe Description', 'https://www.seriouseats.com/thmb/lBAvOl5D32f_fge1kx8Asver10Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg'),
    new Recipe('Test Recipe Name 2', 'Test Recipe Description 2', 'https://cdn.lifehacker.ru/wp-content/uploads/2018/04/Pasta_1523360590-1280x640.jpg'),
  ]

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
