import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'cart', component: CartComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
