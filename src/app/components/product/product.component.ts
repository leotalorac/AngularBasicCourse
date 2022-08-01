import { Component, OnInit, Input, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/product.model';

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
    name: '',
    price: 0
  };
  @Input()
  showImage=true

  constructor() {
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

}
