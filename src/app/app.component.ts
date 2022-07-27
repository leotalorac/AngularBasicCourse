import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-store';
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
}
