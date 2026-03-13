import { Component } from '@angular/core';
import { CountService } from '../shared/services/count-service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.css',
})
export class ComponentB {

  constructor(private myService: CountService) {} //dependency injection

    get counter() {
    return this.myService.counter;
  }
  increment() {
    this.myService.increment();
  }
}
