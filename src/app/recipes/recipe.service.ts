import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipesChanged = new Subject();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
        [new Ingredient('Bread', 3), new Ingredient('Milk', 1)]),
        new Recipe('A test 2 recipe', 'This is test 2', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
        [new Ingredient('Cola', 5), new Ingredient('Milk', 2)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next();
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next();
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next();
    }
}