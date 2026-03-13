import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  
  counter :number;

  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter++;
  }
}
