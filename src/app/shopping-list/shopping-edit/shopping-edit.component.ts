import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {

	@ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
	@ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

	@Output() ingredientAdded = new EventEmitter<Ingredient>;

	ingredient: Ingredient;


	onAddIngredient() {
		this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +this.amountInputRef.nativeElement.value);
		this.ingredientAdded.emit(this.ingredient);
	}
}
