import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'course-project-app';
	recipesShow = true;
	shoppingListShow = false;

	onRecipesShow(event: boolean) {
		console.log('Recipes clicked');
		this.recipesShow = event;
		this.shoppingListShow = !event;
	}

	onShoppingListShow(event) {
		console.log('Shopping List clicked');
		this.shoppingListShow = event;
		this.recipesShow = !event;
	}
}
