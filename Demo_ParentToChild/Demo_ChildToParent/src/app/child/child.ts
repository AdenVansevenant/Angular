import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  private _count: number;

  @Input()
  get count(): number {
    return this._count;
  }

  set count(val: number) {
    this._count = val;
  }

  @Output() countChanged = new EventEmitter<number>();

  constructor() {
    this._count = 0;
  }

  increment() {
    this._count++;
    this.countChanged.emit(this._count);
  }

  decrement() {
    this._count--;
    this.countChanged.emit(this._count);
  }
}
