import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/331839.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe(
			'Big Fat Burger',
			'What else you need to say?',
			'https://bigburgers.es/wp-content/uploads/2021/02/big-burgers-07-600x600.jpg',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];

	getRecipes() {
		return this.recipes.slice();
	}
}