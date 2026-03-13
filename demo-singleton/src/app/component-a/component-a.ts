import { Component } from '@angular/core';
import { CountService } from '../shared/services/count-service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.css',
})
export class ComponentA {

  constructor(private myService: CountService) { } //dependency injection

    get counter() {
    return this.myService.counter;
  }
  increment() {
    this.myService.increment();
  }
}
