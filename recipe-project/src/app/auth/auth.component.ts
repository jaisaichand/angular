import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
isLoginMode = true;
isLoading = false;
error: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onHandleError() {
        this.error = null;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        let observeObj: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
          observeObj = this.authService.login(email, password);
      } else {
        observeObj = this.authService.signup(email, password);
      }

        observeObj.subscribe(
        respData => { console.log(respData);
                      this.isLoading = false;
                      this.router.navigate(['/recipes']); },
        errorMessege => { console.log(errorMessege);
                          this.error = errorMessege;
                          this.isLoading = false; }
    );

        form.reset();
    }
}
