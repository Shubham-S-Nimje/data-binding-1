import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  value1: number = 0;
  isDisable: boolean = false;

  function(amount: number) {
    // console.log(this.value1, amount);
    this.value1 = this.value1 + amount;
    this.isDisable = this.value1 % 2 !== 0;
  }

  // name: string = 'Maruti';
  // names: any = ['shubham', 'prasad', 'john', 'philip'];
  // nameNumber = 0;
  // image: string = 'bhimg.jpg';
  // title = 'Bal Hanuman';
  // inputText = '';
  // clickable: boolean = true;
  // isReqired = true;
  // clicked: boolean = false;
  // fun() {
  //   console.log(`Hello i am ${this.name}`);
  // this.clicked = true;
  // this.name = 'Bheem';
  // this.image = 'cbimg.jpg';
  // this.title = 'Chota Bheem';
  //   if (this.name === 'Maruti') {
  //     this.image = 'cbimg.jpg';
  //     this.name = 'Bheem';
  //     this.title = 'Chota Bheem';
  //   } else {
  //     this.image = 'bhimg.jpg';
  //     this.name = 'Maruti';
  //     this.title = 'Bal Hanuman';
  //   }
  // }
  // disablefun(e) {
  //   console.log(e.target.value);
  //   this.clickable = true;
  // }
  // changeName() {
  //   if (this.nameNumber < 4) {
  //     this.nameNumber++;
  //   } else {
  //     this.nameNumber--;
  //   }
  //   if (this.nameNumber == 3) {
  //     this.clickable = false;
  //   }
  // }
}
