import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root',
})
export class Positionservice {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${environment.apiUrl}/Positions`).pipe(
      tap((result) => {
        console.log('opgehaalde positions :', result);
      })
    );
  }
}
