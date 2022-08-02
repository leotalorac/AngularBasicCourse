import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myshoppingCart: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  onAddToShoppingCart(p: Product) {
    this.myshoppingCart.push(p);
    this.myCart.next(this.myshoppingCart);
  }

  getMyShoppingCart():Product[]{
    return this.myshoppingCart;
  }

  getTotal(){
    return this.myshoppingCart.reduce((sum,item) =>sum + item.price,0);
  }
}
