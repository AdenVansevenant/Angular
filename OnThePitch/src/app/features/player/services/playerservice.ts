import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Player } from '../../Players/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class Playerservice {
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${environment.apiUrl}/Players`).pipe(
      tap((result) => {
        console.log('opgehaalde players :', result);
      })
    );
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${environment.apiUrl}/Players/${id}`).pipe(
      tap((result) => {
        console.log('opgehaalde player :', result);
      })
    );
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${environment.apiUrl}/Players`, player);
  }

  updatePlayer(id: number, player: Player): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/Players/${id}`, player);
  }

  deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/Players/${id}`);
  }
}
