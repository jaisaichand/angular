import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  backclr = this.appService.bColor;
  textclr;
  subscription: Subscription;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.subscription = this.appService.clrObs.subscribe(
      (succ) => {
        this.backclr = succ.bClr;
        this.textclr = succ.tClr;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
