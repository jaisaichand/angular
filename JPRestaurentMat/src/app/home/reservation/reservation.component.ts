import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-reservation',
    templateUrl: 'reservation.component.html',
    styleUrls: ['reservation.component.scss']
})
export class ReservationComponent implements OnInit {
    time1: NgbTimeStruct = null;
    selected;
    partySize: number[] = [];
    dateSelected: string = null;

    constructor(private appService: AppService) {

    }

    ngOnInit() {
        for ( let i = 1 ; i <= 12; i++) {
            this.partySize.push(i);
        }
    }

    resStyle() {
        const res = {
            background : this.appService.tabColor,
            color : this.appService.tColor
        };
        return res;
    }

    backImg() {
        const backImg = {
            background: 'url(\'../../../assets/six.png\')',
            'object-fit': 'cover',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        };

        return backImg;
    }

    OnDateChange(v) {
        this.dateSelected = (v._i.date + '-' + (v._i.month + 1) + '-' + v._i.year);
    }

    textColor() {
        const textcolor = {
            color: this.appService.tColor
        };
        return textcolor;
    }

    bookNow() {}


}
