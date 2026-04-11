import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string;
  counter: number;

  constructor() {
    this.title = 'Hello, Demo-ParentToChild';
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
