import { Component, OnInit, Input, OnChanges, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input()
  product: Product = {
    id: '',
    image: '',
    title: '',
    price: 0
  };
  @Input()
  showImage=true

  total:number = 0;

  @Output()
  addedProduct = new EventEmitter<Product>();

  constructor(
    private storeService: StoreService
  ) {
    // Before render
    // not async request - run once
  }
  ngOnDestroy(): void {
    // When the component is deleted
  }
  ngAfterViewInit(): void {
    // After render
    // handle children
  }
  ngOnChanges(): void {
    // before render and during changes
    // update changes on inputs
  }

  ngOnInit(): void {
    // before render
    // async request (API calls)- once time

  }

  onAddToCart(){
    this.storeService.onAddToShoppingCart(this.product);
    this.total = this.storeService.getTotal();
  }



}
