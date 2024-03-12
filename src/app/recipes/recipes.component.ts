import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

	selectedRecipe: Recipe;

	constructor() { }

	ngOnInit(): void {
	}

	onRecipeSelected(recipe: Recipe) {
		this.selectedRecipe = recipe;
		console.log("recipes" + this.selectedRecipe);
	}

}
