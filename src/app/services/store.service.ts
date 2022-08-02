import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myshoppingCart: Product[] = [];

  constructor() { }

  onAddToShoppingCart(p: Product) {
    this.myshoppingCart.push(p)
  }

  getMyShoppingCart():Product[]{
    return this.myshoppingCart;
  }

  getTotal(){
    return this.myshoppingCart.reduce((sum,item) =>sum + item.price,0);
  }
}
