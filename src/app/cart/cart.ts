import { Component, OnInit } from '@angular/core';
import {CurrencyPipe, DecimalPipe, JsonPipe} from '@angular/common';
import {CartService} from '../service/cart-service';

@Component({
  selector: 'app-cart',
  imports: [
    JsonPipe,
    CurrencyPipe,
    DecimalPipe
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {
  }
}

