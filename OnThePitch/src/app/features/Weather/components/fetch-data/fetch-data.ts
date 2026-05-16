import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { WeatherForeCast } from '../../models/weather-fore-cast.model';
import { Weatherservice } from '../../services/weatherservice';

@Component({
  selector: 'app-fetch-data',
  imports: [CommonModule],
  templateUrl: './fetch-data.html',
  styleUrl: './fetch-data.css',
})
export class FetchData implements OnInit {
  private readonly weatherService = inject(Weatherservice);

  forecasts = signal<WeatherForeCast[]>([]);
  errorMessage = signal('');

  ngOnInit(): void {
    this.weatherService.getForecasts().subscribe({
      next: (data) => {
        console.log('component data :', data);
        this.forecasts.set(data);
      },
      error: () => {
        this.errorMessage.set('Data ophalen is niet gelukt.');
      },
    });
  }
}
