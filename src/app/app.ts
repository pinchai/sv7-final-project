import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Footer} from './footer/footer';
import { RouterLink } from '@angular/router';
import { CartService } from './service/cart-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public cartService: CartService) {
  }
  //
}
