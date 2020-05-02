import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from '../shared/menu-item.model';
import { Subscription } from 'rxjs';

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
    constructor(private menuService: MenuService) {

    }
    ngOnInit() {
        // this.menuService.pushStarters();
        // this.menuService.getStarters();
        this.starterSubs = this.menuService.starterSubj.subscribe(
            (val) => {
                this.starters = val;

            }
        );

        this.menuService.getStarters();
        // ======================
        this.soupsSubs = this.menuService.soupsSubj.subscribe(
            (val) => {
                this.soups = val;

            }
        );

        this.menuService.getSoups();
        // ======================
        this.tandooriSubs = this.menuService.tandooriSubj.subscribe(
            (val) => {
                this.tandoori = val;
            }
        );

        this.menuService.getTandoori();
        // ======================
        this.biryaniSubs = this.menuService.biryaniSubj.subscribe(
            (val) => {
                this.biryani = val;
            }
        );

        this.menuService.getBiryanis();
        // ======================
        this.chineeseSubs = this.menuService.chineeseSubj.subscribe(
            (val) => {
                this.chineese = val;
            }
        );

        this.menuService.getChineese();
        // ======================
        this.dessertsSubs = this.menuService.desertsSubj.subscribe(
            (val) => {
                this.desserts = val;
            }
        );

        this.menuService.getDeserts();
        // ======================
        this.curriesSubs = this.menuService.curriesSubj.subscribe(
            (val) => {
                this.curries = val;
            }
        );

        this.menuService.getCurries();
                // ======================
        this.beveragesSubs = this.menuService.beveragesSubj.subscribe(
                    (val) => {
                        this.beverages = val;
                    }
                );

        this.menuService.getBeverages();

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

    saveOrdersMenu() {
        this.starters.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.startersOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.soups.forEach((val, ind) => {
            if ( val.qty > 0 ) {
                this.soupsOrders.push({index: ind, quantity: val.qty});
            }
        } );

        this.curries.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.curriesOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.biryani.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.biryaniOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.chineese.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.chineeseOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.desserts.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.dessertsOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.tandoori.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.tandooriOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.beverages.forEach( (val, ind) => {
            if ( val.qty > 0 ) {
                this.beveragesOrders.push({index: ind, quantity: val.qty});
            }
        });

        this.menuService.finalOrders(this.startersOrders, this.soupsOrders, this.curriesOrders,
             this.biryaniOrders, this.chineeseOrders, this.dessertsOrders,
              this.tandooriOrders, this.beveragesOrders);

    }

    cancelOrdersMenu() {}


    ngOnDestroy() {
        this.starterSubs.unsubscribe();
    }

}
