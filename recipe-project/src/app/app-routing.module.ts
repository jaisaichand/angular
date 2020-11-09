import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';



export const appRoutes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})]
})
export class AppRoutingModule {

}
