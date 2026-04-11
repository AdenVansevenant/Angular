import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-textbox',
  imports: [FormsModule],
  templateUrl: './filter-textbox.html',
  styleUrl: './filter-textbox.css',
})
export class FilterTextbox {
  filter = '';

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  onFilterChange(): void {
    this.changed.emit(this.filter);
  }
}
