import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientAdded = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 5),
        new Ingredient('Apples', 2)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientAdded.emit();
    }

    addIngredientsRange(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients.slice());
        this.ingredientAdded.emit();
    }
}