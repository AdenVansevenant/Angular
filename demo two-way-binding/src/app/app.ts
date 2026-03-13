import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModelVoorbeeld } from "./ng-model-voorbeeld/ng-model-voorbeeld";

@Component({
  selector: 'app-root',
  imports: [NgModelVoorbeeld],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
