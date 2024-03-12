import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {

	@Input() recipe: Recipe;
	@Output() recipeSelected = new EventEmitter<Recipe>();

	onSelected() {
		console.log('Recipe item clicked');
		this.recipeSelected.emit();
	}
}
