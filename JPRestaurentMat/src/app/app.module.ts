import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatFormFieldModule,
         MatButtonModule,
         MatInputModule,
         MatRippleModule,
         MatNativeDateModule,
         MatSelectModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavRowComponent } from './nav-row/nav-row.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ReservationComponent } from './home/reservation/reservation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavRowComponent,
    HomeComponent,
    CarouselComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatNativeDateModule,
    MatMomentDateModule,
    NgbTimepickerModule,
    FormsModule,
    MatSelectModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
