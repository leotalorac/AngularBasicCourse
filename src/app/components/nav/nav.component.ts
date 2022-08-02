import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  showMenu = false;
  counter: number = 0;
  constructor(private storeService: StoreService) {

  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      console.log(products)
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
