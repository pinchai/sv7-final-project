import {Component} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {CartService} from '../service/cart-service';
import {ProductService} from '../service/product-service';

declare const Swal: any;

@Component({
  selector: 'app-home',
  imports: [
    ProductCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(
    public cartService: CartService,
    public productService: ProductService,
  ) {
  }

  addToCart(item: any) {
    this.cartService.addToCart(item)
    Swal.fire({
      position: "top",
      icon: "success",
      title: "product added to cart",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
