import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	@Output() onRecipesClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() onShoppingListClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
	collapsed = true;

	onClickRecipes() {
		console.log('Recipes clicked');
		this.onRecipesClicked.emit(true);
	}

	onClickShoppingList() {
		console.log('Shopping List clicked');
		this.onShoppingListClicked.emit(true);
	}
}
