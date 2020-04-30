import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
bgcolor = this.appService.generalBcolor;
textcolor = this.appService.tColor;
data;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.clrObs.subscribe(
      (succ) => {
        this.bgcolor = succ.bClr;
        this.textcolor = succ.tClr;
      }
    );
  }

  setStyles() {
    let styles = {
'background': this.bgcolor,
'color': this.textcolor
    };
    return styles;
  }

}
