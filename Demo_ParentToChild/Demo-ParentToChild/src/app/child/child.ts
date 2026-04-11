import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  private _count = 0;
  private _message = '';

  @Input()
  set count(val: number) {
    this._count = val;
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set message(val: string) {
    this._message = val;
  }

  get message(): string {
    return this._message;
  }
}
