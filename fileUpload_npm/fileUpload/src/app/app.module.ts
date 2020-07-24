import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { MultipleDirective } from './directives/multiple.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ViewComponent,
    MultipleDirective
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
