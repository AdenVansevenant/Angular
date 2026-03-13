import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-voorbeeld',
  imports: [],
  templateUrl: './ng-model-voorbeeld.html',
  styleUrl: './ng-model-voorbeeld.css',
})
export class NgModelVoorbeeld {
myname : string
  fontcolor : string

  constructor() {
    this.myname = 'angular'
    this.fontcolor = 'red'
  }
}
