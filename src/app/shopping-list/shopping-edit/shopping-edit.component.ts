import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) ingredientNameInput: ElementRef
  @ViewChild('amountInput', {static: false}) ingredientAmountInput: ElementRef

  constructor(private slService: ShoppingListService) {
  }

  onAddHandler(){
    const ingName = this.ingredientNameInput.nativeElement.value
    const ingValue = this.ingredientAmountInput.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingValue)
    this.slService.addIngredient(newIngredient)
  }
}
