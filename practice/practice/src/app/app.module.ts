import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { ErrorDirective } from './one/error.directive';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './one/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    ErrorDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
