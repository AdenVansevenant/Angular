import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  imports: [],
  templateUrl: './filter-textbox.html',
  styleUrl: './filter-textbox.css',
})
export class FilterTextbox {
@Output() changed = new EventEmitter<string>();

  onClicked(value:string){
    this.changed.emit(value);

  }
}


