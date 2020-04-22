import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ RecipeItemComponent,
                    RecipesComponent,
                    RecipeListComponent,
                    RecipeDetailComponent,
                    RecipeStartComponent,
                    RecipeEditComponent],

    imports: [RouterModule, SharedModule, ReactiveFormsModule, RecipesRoutingModule],
    exports: [RecipeItemComponent,
              RecipesComponent,
              RecipeListComponent,
              RecipeDetailComponent,
              RecipeStartComponent,
              RecipeEditComponent]
})
export class RecipesModule {

}
