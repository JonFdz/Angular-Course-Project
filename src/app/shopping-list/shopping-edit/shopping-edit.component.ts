import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
	@ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

	ingredient: Ingredient;

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
	}

	onAddIngredient() {
		this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, +this.amountInputRef.nativeElement.value)
		this.shoppingListService.addIngredient(this.ingredient);
	}
}
