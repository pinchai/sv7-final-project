import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_list:any[] = []
  constructor() {
    this.cart_list = JSON.parse(localStorage.getItem('cart_list') ?? '[]')
  }

  getCartList(){
    return this.cart_list
  }

  addToCart(item:any){
    item.qty = 1;
    let isExist = this.cart_list.find(x => x.id == item.id);
    if (isExist) {
      isExist.qty++;
      let index = this.cart_list.indexOf(isExist);
      this.cart_list[index] = isExist;
    } else {
      this.cart_list.push(item);
    }
    localStorage.setItem('cart_list',JSON.stringify(this.cart_list))
  }
}
