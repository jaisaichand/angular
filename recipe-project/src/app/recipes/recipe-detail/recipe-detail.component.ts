import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    detailData: Recipe;
    id: number;

    constructor(private recipeService: RecipeService, private actRoute: ActivatedRoute, private router: Router) {}


    ngOnInit() {
        this.actRoute.params.subscribe(
            (params: Params) => {
                this.id = +params.id;
                this.detailData = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
      }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.detailData.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.actRoute});
        // this.router.navigate(['../',this.id,'edit'],{relativeTo: this.actRoute});
    }
}
