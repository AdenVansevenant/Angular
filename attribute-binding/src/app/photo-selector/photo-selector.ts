import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-selector',
  imports: [],
  templateUrl: './photo-selector.html',
  styleUrl: './photo-selector.css',
})
export class PhotoSelector {
  photos: string[];
  selectedPhoto!: string;
  selectPhoto(photo: string) {
    this.selectedPhoto = photo; 

  }

  constructor() {
    this.photos = [
      'Images/cat.jpeg',
      'Images/cat1.jpeg',
      'Images/cat2.jpeg'
    ];
    this.selectedPhoto = this.photos[0];
    
  }
}
