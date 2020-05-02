
export class MenuItem {
name: string;
price: number;
qty?: number = null;
    constructor(name1: string, price1: number, qty?: number) {
        this.name = name1;
        this.price = price1;
        this.qty = qty;
    }
}
