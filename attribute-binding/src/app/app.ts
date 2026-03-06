import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoSelector } from './photo-selector/photo-selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PhotoSelector],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attribute-binding');
}
