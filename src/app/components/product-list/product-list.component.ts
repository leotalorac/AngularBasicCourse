import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      id: "1",
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: "2",
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: "3",
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: "4",
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: "5",
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: "6",
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  myshoppingCart: Product[] = [];
  total:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(p: Product) {
    this.myshoppingCart.push(p)
    this.total = this.myshoppingCart.reduce((sum,item) =>sum + item.price,0);
  }
}
