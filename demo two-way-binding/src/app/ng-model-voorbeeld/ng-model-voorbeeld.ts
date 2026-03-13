import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-voorbeeld',
  imports: [FormsModule],
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


  onClicked(value : string) {
    this.myname = value
  }
}
