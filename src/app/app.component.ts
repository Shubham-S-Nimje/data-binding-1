import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = 'Maruti';
  image: string = 'bhimg.jpg';
  title = 'Bal Hanuman';
  clicked: boolean = false;
  fun() {
    console.log(`Hello i am ${this.name}`);
    // this.clicked = true;
    // this.name = 'Bheem';
    // this.image = 'cbimg.jpg';
    // this.title = 'Chota Bheem';
    if (this.name === 'Maruti') {
      this.image = 'cbimg.jpg';
      this.name = 'Bheem';
      this.title = 'Chota Bheem';
    } else {
      this.image = 'bhimg.jpg';
      this.name = 'Maruti';
      this.title = 'Bal Hanuman';
    }
  }
}
