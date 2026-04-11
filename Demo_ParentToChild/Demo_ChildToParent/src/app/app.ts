import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  myCount: number;

  constructor() {
    this.myCount = 0;
  }

  countChange(event: number) {
    this.myCount = event;
  }
}
