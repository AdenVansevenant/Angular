import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
selector: 'app-root',
imports: [RouterOutlet, RouterLink, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
  title: string;
  constructor()
  {
    this.title = "RoutingExample";
  }
}