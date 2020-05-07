import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
bgcolor = this.appService.generalBcolor;
textcolor = this.appService.tColor;
data;
clrObsSubs: Subscription;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.clrObsSubs = this.appService.clrObs.subscribe(
      (succ) => {
        this.bgcolor = succ.bClr;
        this.textcolor = succ.tClr;
      }
    );
  }

  setStyles() {
    const styles = {
          background: this.bgcolor,
          color: this.textcolor
    };
    return styles;
  }

  ngOnDestroy() {
    this.clrObsSubs.unsubscribe();
  }

}

// Solely developed by jai sai chand(t.jaisaichand4@gmail.com)
