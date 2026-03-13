import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  backgroundColor = '';
  textColor = '';

  changeColor(bg: string, text: string) {
    this.backgroundColor = bg;
    this.textColor = text;
  }

  setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
}
