import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-store';
  widthImg = 10;
  box={
    w:10,
    h:12,
    color:'green'
  };
  name = 'lotalorafox';
  age = 23;
  imgurl = "https://source.unsplash.com/random";
  disable = true;
  valuetext = 'lios'
  person = {
    name: "luis",
    age: 23,
    avatar: this.imgurl
  }
  color:string = "blue"

  emojis:string[] = [ '😂' , '🐦', '🐳','🌮', '💚']
  newEmoji = ""

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  toggleButton() {
    this.disable=!this.disable;
    this.person.age++;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeText(event:Event){
    const element = event.target as HTMLInputElement;
    this.valuetext=element.value;
    console.log(this.valuetext)
  }
  AddEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji=""
  }
  deleteEmoji(index:number){
    this.emojis.splice(index,1)
  }
}
