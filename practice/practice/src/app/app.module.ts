import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { ErrorDirective } from './one/error.directive';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './one/child/child.component';
import { TestDirective } from './shared/test.directive';
import { ParentoneComponent } from './parentone/parentone.component';
import { ContaineroneComponent } from './containerone/containerone.component';
import { ChildoneComponent } from './childone/childone.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    ErrorDirective,
    ChildComponent, TestDirective, ParentoneComponent, ContaineroneComponent, ChildoneComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
