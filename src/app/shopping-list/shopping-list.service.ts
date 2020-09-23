import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientsUpdated = new Subject();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 5),
        new Ingredient('Apples', 2)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientsUpdated.next();
    }

    addIngredientsRange(ingredients: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ingredients.slice());
        this.ingredientsUpdated.next();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsUpdated.next();
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsUpdated.next();
    }
}