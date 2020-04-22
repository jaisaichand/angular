import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refresshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private tokenExpirationTimer: any;

    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {}

    signup(email1: string, password1: string) {
       return this.http.post<AuthResponseData>
       ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyA2S0VZoPh18Yh7z0BCnkgaIlIdHQCsw54',
        {
            email: email1,
            password: password1,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }
        ));
    }

    autoLogout(expirationDuration: number) {
       this.tokenExpirationTimer = setTimeout( () => { this.logout(); } , expirationDuration);
    }

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return null;
        }

        const loadUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadUser.token) {
            this.user.next(loadUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    login(email1: string, password1: string) {
       return this.http.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyA2S0VZoPh18Yh7z0BCnkgaIlIdHQCsw54',
        {
            email: email1,
            password: password1,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(
            resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }
        ));
    }

    private handleAuthentication( email: string , userId: string, token: string, expiresIn: number ) {
        const expirationDate = new Date( new Date().getTime() + +expiresIn * 1000  );
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessege = 'An error has occoured!';
        if (!errorRes.error || !errorRes.error.error ) {
            return throwError(errorMessege);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessege = 'This email already exists!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessege = 'This email does not exist!';
                break;
            case 'INVALID_PASSWORD':
                errorMessege = 'Incorrect password!';
                break;
        }
        return throwError(errorMessege);

    }
}
