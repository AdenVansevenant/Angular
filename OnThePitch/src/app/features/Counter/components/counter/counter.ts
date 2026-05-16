import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  currentCount = 0;

  incrementCounter(): void {
    this.currentCount++;
  }
}
