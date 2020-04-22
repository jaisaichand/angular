import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {}

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'sample recipe',
    //         'sample recipe description test string ',
    // 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/indian.jpg',
    // [
    //     new Ingredient('Bread', 2),
    //     new Ingredient('Cheese', 4)
    // ]
    //     ),
    //     new Recipe(
    //         'sample recipe 2',
    //         'sample recipe description test string 2',
    // 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg',
    // [
    //     new Ingredient('Noodles', 1),
    //     new Ingredient('mushroom', 3),
    //     new Ingredient('Broccoli', 2)
    // ]
    //     )
    // ];
    private recipes: Recipe[] = [];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, newRecipe: Recipe ) {
        this.recipes[id] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

}
