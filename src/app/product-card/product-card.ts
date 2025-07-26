import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CurrencyPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    JsonPipe,
    CurrencyPipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product: any;

  @Output() addToCartEvent = new EventEmitter<any>();
  addToCart(item:any) {
    this.addToCartEvent.emit(item);
  }
}
