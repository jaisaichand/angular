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
    arrayOfOrders = [];
    total1 = 0;

    ngOnInit() {
//        this.finOrders = this.appService.getFinOrders();



    }

    getFinords() {
        this.finOrders  = this.appService.receivedOrder;
        console.log(this.finOrders);

        // ---------------------------------------------------------------------------------------------

        this.arrayOfOrders = [];
        this.finOrders.forEach(
            (val , ind) => { val.forEach(
                (val1, ind1) => {
                    if ( val1.qty > 0 ) {
                        this.arrayOfOrders.push(val1);
                    }
                }
            ); }
        );

        this.calcTotal();
    }

    addQts(i: number) {
        this.arrayOfOrders[i].qty = this.arrayOfOrders[i].qty + 1;
        this.calcTotal();
    }

    remQts(i: number) {
        this.arrayOfOrders[i].qty = this.arrayOfOrders[i].qty - 1;

        this.calcTotal();
    }

    calcTotal() {
        this.total1 = 0;
        this.arrayOfOrders.forEach( (val, ind) => {
            this.total1 = this.total1 + (val.qty * val.price);
        } );
    }

}


// Solely developed by jai sai chand(t.jaisaichand4@gmail.com)
