import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart-model';
import { Product } from '../product-model';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;

  faTrash = faTrashAlt;
  faShoppingCart = faShoppingCart;

  cartTotal: string;
  cartQuantity: number;
  constructor() {
    this.cartTotal = '';
    this.cartQuantity = 0;
  }

  private calculateTotals() {
    this.cartTotal = this.cart.items.reduce((acc, item) => {
      return (item.quantity * item.product.price) + acc;
    }, 0).toFixed(2);
    this.cartQuantity = this.cart.items.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
  }

  ngOnInit(): void {
    this.calculateTotals();
  }

  increaseQuantity(product: Product) {
    this.cart.addItem(product);
    this.calculateTotals();
  }

  decreaseQuantity(product: Product) {
    this.cart.removeItem(product);
    this.calculateTotals();
  }

  removeAll() {
    this.cart.removeAll();
    this.calculateTotals();
  }

}
