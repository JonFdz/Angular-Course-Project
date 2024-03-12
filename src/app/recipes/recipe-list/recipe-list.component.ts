import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test',
			'https://www.foodandwine.com/thmb/xCSZU-_i7AoQq5vKvvM4hpDa3OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-beef-chili-step-03-2-FT-RECIPE1222-90d82204e08141e6a7fc01ebc6422c7b.jpg'),
		new Recipe('Another Test Recipe', 'This is simply a test',
			'https://www.foodandwine.com/thmb/xCSZU-_i7AoQq5vKvvM4hpDa3OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-beef-chili-step-03-2-FT-RECIPE1222-90d82204e08141e6a7fc01ebc6422c7b.jpg')
	];

	constructor() { }

	ngOnInit(): void {
	}

	onRecipeSelected(recipe: Recipe) {
		console.log("recipe" + recipe);
		this.recipeWasSelected.emit(recipe);
	}
}
