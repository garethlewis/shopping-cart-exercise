import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../cartitem-model';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../product-model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  @Output() onArrowUpSelected: EventEmitter<Product>;
  @Output() onArrowDownSelected: EventEmitter<Product>;

  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleDown = faArrowCircleDown;

  constructor() { 
    this.onArrowDownSelected = new EventEmitter();
    this.onArrowUpSelected = new EventEmitter();
  }

  increase() {
    this.onArrowUpSelected.emit(this.cartItem.product);
  }

  decrease() {
    this.onArrowDownSelected.emit(this.cartItem.product);
  }

  ngOnInit(): void {
  }

}
