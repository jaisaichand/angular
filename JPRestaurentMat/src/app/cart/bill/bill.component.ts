import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-bill',
    templateUrl: 'bill.component.html'
})
export class BillComponent implements OnInit {

    constructor(private appService: AppService) {

    }
    finOrders;

    ngOnInit() {
        this.appService.getFinalOrders();
        this.finOrders = this.appService.finOrd;
    }
}
