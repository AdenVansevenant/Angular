import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { WeatherForeCast } from '../models/weather-fore-cast.model';

@Injectable({
  providedIn: 'root',
})
export class Weatherservice {
  constructor(private http: HttpClient) {}

  getForecasts(): Observable<WeatherForeCast[]> {
    return this.http.get<WeatherForeCast[]>(`${environment.dataUrl}/weatherforecast.json`).pipe(
      tap((result) => {
        console.log('opgehaalde data uit json :', result);
      })
    );
  }
}
