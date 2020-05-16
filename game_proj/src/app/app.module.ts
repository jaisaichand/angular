import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent, SignupComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatDialogModule, Ng2TelInputModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignupComponent]
})
export class AppModule { }
