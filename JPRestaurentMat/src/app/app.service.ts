import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AppService {
  constructor() {}

    bColor = 'rgb(83, 83, 189)';
    tColor = 'rgb(255, 255, 255, 0.87)';
    tabColor = '#1d1c1c';
    generalBcolor = 'rgb(83, 83, 189)';
    darkClr = '#121212';
    finOrd;
    totalFinalOrd = new Subject();

    receivedOrder = [];

starterSubj = new Subject();
tandooriSubj = new Subject();
soupsSubj = new Subject();
biryaniSubj = new Subject();
chineeseSubj = new Subject();
desertsSubj = new Subject();
curriesSubj = new Subject();
beveragesSubj = new Subject();

startersOrd;
soupsOrd;
curriesOrd;
biryaniOrd;
chineeseOrd;
dessertsOrd;
tandooriOrd;
beveragesOrd;

finalOrdArray = [
];


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

      //  .................................................................................................

      // tslint:disable-next-line: member-ordering
      starters = [
        {name: 'Chicken Wings', price: 270, qty: 0},
        {name: 'Chilli Chicken', price: 240, qty: 0},
        {name: 'Chicken 65', price: 190, qty: 0},
        {name: 'Apollo Fish', price: 250, qty: 0},
        {name: 'Prawn Tempura', price: 220, qty: 0}
    ];
      // tslint:disable-next-line: member-ordering
      tandoori =  [
        {qty: 0, name: 'Chicken Tikka', price: 260},
        {qty: 0, name: 'Malai kebab', price: 190},
        {qty: 0, name: 'Thangdi Kebab', price: 220},
        {qty: 0, name: 'Tandoori Chicken', price: 290}
    ];
      // tslint:disable-next-line: member-ordering
biryani = [
    {qty: 0, name: 'Veg Biryani', price: 110},
    {qty: 0, name: 'Sp Veg Biryani', price: 140},
    {qty: 0, name: 'Chicken Dum Biryani', price: 190},
    {qty: 0, name: 'Chicken fry peice Biryani', price: 200},
    {qty: 0, name: 'Mutton Biryani', price: 240},
    {qty: 0, name: 'Panner Biryani', price: 155},
    {qty: 0, name: 'Prawns Biryani', price: 210}
];

    // tslint:disable-next-line: member-ordering
chineese = [
    {qty: 0, name: 'Veg Fried rice', price: 85},
    {qty: 0, name: 'Veg Noodles', price: 80},
    {qty: 0, name: 'Veg Manchuria', price: 90},
    {qty: 0, name: 'Egg Fried rice', price: 95},
    {qty: 0, name: 'Egg Noodles', price: 100},
    {qty: 0, name: 'Egg Manchuria', price: 100},
    {qty: 0, name: 'Chicken Fried rice', price: 120},
    {qty: 0, name: 'Chicken Noodles', price: 120},
    {qty: 0, name: 'Chicken Manchuria', price: 125}
];

  // tslint:disable-next-line: member-ordering
curries = [
    {qty: 0, name: 'Aloo curry', price: 75},
    {qty: 0, name: 'Dal curry', price: 85},
    {qty: 0, name: 'Egg curry', price: 85},
    {qty: 0, name: 'Chicken curry', price: 110},
    {qty: 0, name: 'Mutton curry', price: 140},
    {qty: 0, name: 'Fiah curry', price: 140},
    {qty: 0, name: 'Prawns curry', price: 135}
];
  // tslint:disable-next-line: member-ordering
desserts = [
    {qty: 0, name: 'Gulab jamun', price: 50},
    {qty: 0, name: 'Rasagulla', price: 55},
    {qty: 0, name: 'Rasmalai', price: 70},
    {qty: 0, name: 'Basundi', price: 75}
];
  // tslint:disable-next-line: member-ordering
beverages = [
    {qty: 0, name: 'Cold Coffee', price: 75},
    {qty: 0, name: 'Grape Juice', price: 60},
    {qty: 0, name: 'Musk Melon Juice', price: 65},
    {qty: 0, name: 'Badam Milk', price: 75},
    {qty: 0, name: 'Soft drinks', price: 70}
];
  // tslint:disable-next-line: member-ordering
soups = [
    {qty: 0, name: 'Tomato soup', price: 65},
    {qty: 0, name: 'Veg lemon coriander soup', price: 70},
    {qty: 0, name: 'Chicken manchow soup', price: 75},
    {qty: 0, name: 'Mushroom soup', price: 85},
    {qty: 0, name: 'Sweet corn soup', price: 80}
];




getStarters() {
    this.starterSubj.next(this.starters.slice());
}

getTandoori() {
    this.tandooriSubj.next(this.tandoori.slice());
}

getSoups() {
    this.soupsSubj.next(this.soups.slice());
}

getBiryanis() {
    this.biryaniSubj.next(this.biryani.slice());
}

getChineese() {
    this.chineeseSubj.next(this.chineese.slice());
}

getDeserts() {
    this.desertsSubj.next(this.desserts.slice());
}

getCurries() {
    this.curriesSubj.next(this.curries.slice());
}

getBeverages() {
    this.beveragesSubj.next(this.beverages.slice());
}

finalOrders(startersOrd, soupsOrd, curriesOrd, biryaniOrd, chineeseOrd, dessertsOrd, tandooriOrd, beveragesOrd) {
    this.startersOrd = startersOrd;
    this.soupsOrd = soupsOrd;
    this.curriesOrd = curriesOrd;
    this.biryaniOrd = biryaniOrd;
    this.chineeseOrd = chineeseOrd;
    this.dessertsOrd = dessertsOrd;
    this.tandooriOrd = tandooriOrd;
    this.beveragesOrd = beveragesOrd;
    // final orders array with index and quantity of the array
}

calcFinalOrders() {

    this.startersOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.starters[val.index], qty: val.qty});
        }
    );

    this.soupsOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.soups[val.index], qty: val.qty});
        }
    );

    this.curriesOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.curries[val.index], qty: val.qty});
        }
    );

    this.biryaniOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.biryani[val.index], qty: val.qty});
        }
    );

    this.chineeseOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.chineese[val.index], qty: val.qty});
        }
    );

    this.dessertsOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.desserts[val.index], qty: val.qty});
        }
    );

    this.tandooriOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.tandoori[val.index], qty: val.qty});
        }
    );

    this.beveragesOrd.forEach(
        (val, ind) => {
            this.finalOrdArray.push({item: this.beverages[val.index], qty: val.qty});
        }
    );

}

getFinOrders() {
    this.calcFinalOrders();
    return this.finalOrdArray;
}

//  .......................................................................................................



}
