import { Component, ViewEncapsulation, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit, OnChanges {
    constructor(private appService: AppService, private dialog: MatDialog) {}

signupForm: FormGroup;
submitDisab;

    hasError(e) {
        console.log(e);
    }
    getNumber(e) {
        console.log(e);
    }

    telInputObject(e) {

        this.submitDisab = this.signupForm.valid;
    }

    onCountryChange(e) {
        console.log(e);
    }

    closeIt() {
        this.dialog.closeAll();
    }

    ngOnInit() {
        this.signupForm = new FormGroup({
            fullName : new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', [Validators.required]),
            checkb : new FormControl('', [Validators.required] )
        });

        this.submitDisab = this.signupForm.valid;

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        this.submitDisab = this.signupForm.valid;
    }
    onFormChange() {
        this.submitDisab = this.signupForm.valid;

    }
    onSignupSubmit() {
        alert('signup succesful');
    }


}
