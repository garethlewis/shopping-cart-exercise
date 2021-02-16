import { CartItem } from './cartitem-model';
import { Product } from './product-model';

export class Cart {
    items: Array<CartItem>;
    constructor() {
        this.items = [];
    }

    private getItem(id: number): CartItem {
        return this.items.find(i => i.product.id === id);
    }

    addItem(product: Product): void {
        // Find if items contains product already
        const item = this.getItem(product.id);
        if (item !== undefined) {
            item.quantity++;
        } else {
            this.items.push(new CartItem(product, 1));
        }
    }

    removeItem(product: Product): void {
        // Find if items contains product already
        const item = this.getItem(product.id);
        if (item !== undefined) {
            if (item.quantity === 1) {
                const index = this.items.findIndex(i => i.product.id === product.id);
                this.items.splice(index, 1);
            } else {
                item.quantity--;
            }
        }
    }

    removeAll() {
        this.items = [];
    }
}