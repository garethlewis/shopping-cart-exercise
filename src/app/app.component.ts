import { Component } from '@angular/core';
import { Product } from './product-model';
import { CartItem } from './cartitem-model';
import { Cart } from './cart-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<Product>;
  cart: Cart;

  constructor() {
    this.products = [
      new Product(1, "Jersey", "Black Overhead Hoody Jersey ", 24),
      new Product(2, "Long Sleeve Stretch Oxford Shirt", "A classic, our Oxford shirt is woven with stretch for additional comfort. Designed with a neat exposed button collar with a curved hem which retains its smart look whether tucked in or left out. Finished with a stag embroidered detail on the chest, this shirt is ideal for smart-casual styling.", 22),
      new Product(3, "Charcoal Funnel Neck Coat", "Smart and practical, funnel neck coat in a smart Herringbone check with to side pockets to keep your hands warm and two flap-over pockets. A stitched internal gilet provides further warmth on colder days and ribbed cuffs help to keep out drafts.", 99),
      new Product(4, "Black Straight Fit Jeans With Stretch", "Jeans With Stretch", 25)
    ];
    this.cart = new Cart();
    this.products.forEach(p => this.cart.items.push(new CartItem(p, 1)));
  }
}
