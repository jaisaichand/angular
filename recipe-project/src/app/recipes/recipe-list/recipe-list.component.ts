import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

subscriptionStore: Subscription;
    recipes: Recipe[];


    constructor(private recipes1: RecipeService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.recipes = this.recipes1.getRecipes();
        this.subscriptionStore = this.recipes1.recipeChanged.subscribe((recipes: Recipe[]) => {
            this.recipes = recipes;

        } );
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscriptionStore.unsubscribe();
    }




}
