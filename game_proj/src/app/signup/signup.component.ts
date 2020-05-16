import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
    constructor(private appService: AppService, private dialog: MatDialog) {}

    hasError(e) {
        console.log(e);
    }
    getNumber(e) {
        console.log(e);
    }

    telInputObject(e) {
        console.log(e);
    }

    onCountryChange(e) {
        console.log(e);
    }

    closeIt() {
        this.dialog.closeAll();
    }



}
