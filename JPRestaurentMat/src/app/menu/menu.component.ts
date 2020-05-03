import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from '../shared/menu-item.model';
import { Subscription, Subject } from 'rxjs';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit, OnDestroy {

starters;
soups;
beverages;
tandoori;
biryani;
chineese;
curries;
desserts;

startersOrders;
soupsOrders;
beveragesOrders;
tandooriOrders;
biryaniOrders;
chineeseOrders;
curriesOrders;
dessertsOrders;

starterSubs: Subscription;
soupsSubs: Subscription;
beveragesSubs: Subscription;
tandooriSubs: Subscription;
biryaniSubs: Subscription;
chineeseSubs: Subscription;
curriesSubs: Subscription;
dessertsSubs: Subscription;

    mainMenu: string[];
    constructor(private menuService: MenuService, private appService: AppService, private router: Router) {

    }

    throwOrders = new Subject();
    ngOnInit() {
        // this.menuService.pushStarters();
        // this.menuService.getStarters();
        this.starterSubs = this.appService.starterSubj.subscribe(
            (val) => {
                this.starters = val;

            }
        );

        this.appService.getStarters();
        // ======================
        this.soupsSubs = this.appService.soupsSubj.subscribe(
            (val) => {
                this.soups = val;

            }
        );

        this.appService.getSoups();
        // ======================
        this.tandooriSubs = this.appService.tandooriSubj.subscribe(
            (val) => {
                this.tandoori = val;
            }
        );

        this.appService.getTandoori();
        // ======================
        this.biryaniSubs = this.appService.biryaniSubj.subscribe(
            (val) => {
                this.biryani = val;
            }
        );

        this.appService.getBiryanis();
        // ======================
        this.chineeseSubs = this.appService.chineeseSubj.subscribe(
            (val) => {
                this.chineese = val;
            }
        );

        this.appService.getChineese();
        // ======================
        this.dessertsSubs = this.appService.desertsSubj.subscribe(
            (val) => {
                this.desserts = val;
            }
        );

        this.appService.getDeserts();
        // ======================
        this.curriesSubs = this.appService.curriesSubj.subscribe(
            (val) => {
                this.curries = val;
            }
        );

        this.appService.getCurries();
                // ======================
        this.beveragesSubs = this.appService.beveragesSubj.subscribe(
                    (val) => {
                        this.beverages = val;
                    }
                );

        this.appService.getBeverages();
        // this.pushOrders();

    }


    addStarterQty(ind: number) {
        this.starters[ind].qty = this.starters[ind].qty + 1;
    }

    removeStarterQty(ind) {
        this.starters[ind].qty = this.starters[ind].qty - 1;
    }

    // ==========================

    addTandooriQty(ind: number) {
        this.tandoori[ind].qty = this.tandoori[ind].qty + 1;
    }

    removeTandooriQty(ind) {
        this.tandoori[ind].qty = this.tandoori[ind].qty - 1;
    }

    // ==========================

    addSoupsQty(ind: number) {
        this.soups[ind].qty = this.soups[ind].qty + 1;
    }

    removeSoupsQty(ind) {
        this.soups[ind].qty = this.soups[ind].qty - 1;
    }

    // ==========================

    addBiryaniQty(ind: number) {
        this.biryani[ind].qty = this.biryani[ind].qty + 1;
    }

    removeBiryaniQty(ind) {
        this.biryani[ind].qty = this.biryani[ind].qty - 1;
    }

    // ==========================

    addChineeseQty(ind: number) {
        this.chineese[ind].qty = this.chineese[ind].qty + 1;
    }

    removeChineeseQty(ind) {
        this.chineese[ind].qty = this.chineese[ind].qty - 1;
    }

    // ==========================

    addDessertsQty(ind: number) {
        this.desserts[ind].qty = this.desserts[ind].qty + 1;
    }

    removeDessertsQty(ind) {
        this.desserts[ind].qty = this.desserts[ind].qty - 1;
    }

    // ==========================

    addCurriesQty(ind: number) {
        this.curries[ind].qty = this.curries[ind].qty + 1;
    }

    removeCurriesQty(ind) {
        this.curries[ind].qty = this.curries[ind].qty - 1;
    }

    // ==========================

    addBeveragesQty(ind: number) {
        this.beverages[ind].qty = this.beverages[ind].qty + 1;
    }

    removeBeveragesQty(ind) {
        this.beverages[ind].qty = this.beverages[ind].qty - 1;
    }

    pushOrders() {
        this.appService.totalFinalOrd.next(this.starters);
        console.log('menu component' + this.starters);
        this.appService.receivedOrder.push(this.starters);
        this.appService.receivedOrder.push(this.soups);
        this.appService.receivedOrder.push(this.curries);
        this.appService.receivedOrder.push(this.biryani);
        this.appService.receivedOrder.push(this.chineese);
        this.appService.receivedOrder.push(this.desserts);
        this.appService.receivedOrder.push(this.tandoori);
        this.appService.receivedOrder.push(this.beverages);
        this.router.navigate(['/cart']);
    }

    ngOnDestroy() {
        this.beveragesSubs.unsubscribe();
        this.starterSubs.unsubscribe();
        this.soupsSubs.unsubscribe();
        this.curriesSubs.unsubscribe();
        this.biryaniSubs.unsubscribe();
        this.chineeseSubs.unsubscribe();
        this.dessertsSubs.unsubscribe();
        this.tandooriSubs.unsubscribe();
    }


}
