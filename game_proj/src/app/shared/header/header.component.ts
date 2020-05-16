import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupComponent } from 'src/app/signup/signup.component';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
dialogRef;
    constructor(public dialog: MatDialog, public appService: AppService) {}

 openDialog(): void {
    this.dialogRef = this.dialog.open(SignupComponent);
}


}
