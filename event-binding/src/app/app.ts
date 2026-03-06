import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

export class Student {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule, NgFor]
})
export class App {
  clickCount: number;
  students: Student[];
  liveInput: string;
  addInput: string;

  constructor() {
    this.clickCount = 0;
    this.liveInput = '';
    this.addInput = '';
    this.students = [
      new Student(1, 'Azis'),
      new Student(2, 'Vermeulen')
    ];
  }

  onButtonClick() {
    this.clickCount++;
  }

  showPopup() {
    alert('Click Me button clicked!');
  }

  addStudent(name: string) {
    if (name.trim()) {
      const id = this.students.length + 1;
      this.students.push(new Student(id, name.trim()));
      this.addInput = '';
    }
  }

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}