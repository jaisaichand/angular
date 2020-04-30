import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { AppService } from '../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

backclr = this.appService.bColor;
textclr;

  @ViewChild(MatMenuTrigger, {static: false}) menu: MatMenuTrigger;

  constructor(private appService: AppService ) { }

  ngOnInit() {
    this.appService.clrObs.subscribe(
      (succ) => {
        this.backclr = succ.bClr;
        this.textclr = succ.tClr;
      }
    );
  }

  onLightMode() {
   this.appService.onLightMode();

  }
  onDarkMode() {
   this.appService.onDarkMode();
  }

  ngOnDestroy() {
    this.appService.clrObs.unsubscribe();
  }

}
