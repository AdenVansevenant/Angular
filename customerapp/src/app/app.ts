import { Component, signal } from '@angular/core';
import { Customers } from './Features/customers/customers/customers';

@Component({
  selector: 'app-root',
  imports: [Customers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customerapp');
}
