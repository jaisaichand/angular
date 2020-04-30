import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
    bColor = 'rgb(83, 83, 189)';
    tColor = 'rgb(255, 255, 255, 0.87)';
    tabColor = '#1d1c1c';
    generalBcolor = 'rgb(83, 83, 189)';
    darkClr = '#121212';

    clrObs = new Subject<{'bClr': string, 'tClr': string}>();

    onLightMode() {
        this.bColor = this.generalBcolor;
        this.clrObs.next({
            bClr: this.bColor,
            tClr: this.tColor
        });
      }
      onDarkMode() {
        this.bColor = this.darkClr;
        this.clrObs.next({
            bClr: this.bColor,
            tClr: this.tColor
        });
      }
}
