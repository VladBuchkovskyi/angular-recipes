import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  // Don't need @Input() in this case while using router, we will receive recipe by another way
  // @Input() recipe:Recipe
  recipe:Recipe
  id: number

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id']
        this.recipe = this.recipesService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

}
