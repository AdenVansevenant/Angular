import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count: number;
  constructor() {
    this.count = 0;
  }


  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }


  sayHello(name: string) {
    alert("Hallo" + name);
  }

  save(value: string) {
    console.log("email:", value);
  }
}
