import { Product } from './product-model';

export class CartItem {
    totalPrice: number;
    
    constructor(public product: Product, public quantity: number = 1) {
    }

    increase(): boolean {
        this.quantity++;
        return false;
    }

    decrease(): boolean {
        this.quantity--;
        return false;
    }
}
