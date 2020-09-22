import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientAdded = new Subject();

    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 5),
        new Ingredient('Apples', 2)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientAdded.next();
    }

    addIngredientsRange(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients.slice());
        this.ingredientAdded.next();
    }
}