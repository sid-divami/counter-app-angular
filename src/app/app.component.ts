import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter-2';
  counter = 0;
  getCount(event: number) {
    this.counter = event;
  }
}
