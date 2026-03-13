import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentA } from "./component-a/component-a";
import { ComponentB } from './component-b/component-b';

@Component({
  selector: 'app-root',
  imports: [ComponentA, ComponentB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-singleton');
}
