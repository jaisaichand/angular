import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable <boolean | UrlTree>  {
        // tslint:disable-next-line: arrow-return-shorthand
        return this.authService.user.pipe(map(user => { return !!user; } ), tap( isAuth => {
            if ( !isAuth ) {
                this.router.navigate(['/auth']);
             }
        } ) );
    }
}
