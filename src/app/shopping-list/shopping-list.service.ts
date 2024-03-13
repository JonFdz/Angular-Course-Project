import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		if (this.ingredients.find(i => i.name === ingredient.name)) {
			this.ingredients.find(i => i.name === ingredient.name).amount += ingredient.amount;
		} else {
		this.ingredients.push(ingredient);
		}
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}