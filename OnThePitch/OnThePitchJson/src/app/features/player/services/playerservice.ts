import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Player } from '../../Players/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class Playerservice {
  private players: Player[] = [];
  private loaded = false;

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.loadPlayers().pipe(
      map((players) => [...players]),
      tap((result) => {
        console.log('opgehaalde players uit json :', result);
      })
    );
  }

  getPlayer(id: number): Observable<Player> {
    return this.loadPlayers().pipe(
      map((players) => players.find((player) => player.id === id) as Player),
      tap((result) => {
        console.log('opgehaalde player uit json :', result);
      })
    );
  }

  createPlayer(player: Player): Observable<Player> {
    return this.loadPlayers().pipe(
      map(() => {
        const newPlayer: Player = {
          ...player,
          id: this.getNextId(),
          position: this.getPosition(player.positionId),
        };

        this.players.push(newPlayer);
        return newPlayer;
      })
    );
  }

  updatePlayer(id: number, player: Player): Observable<void> {
    return this.loadPlayers().pipe(
      map(() => {
        const index = this.players.findIndex((item) => item.id === id);

        if (index !== -1) {
          this.players[index] = {
            ...player,
            id,
            position: this.getPosition(player.positionId),
          };
        }
      })
    );
  }

  deletePlayer(id: number): Observable<void> {
    return this.loadPlayers().pipe(
      map(() => {
        this.players = this.players.filter((player) => player.id !== id);
      })
    );
  }

  private loadPlayers(): Observable<Player[]> {
    if (this.loaded) {
      return of(this.players);
    }

    return this.http.get<Player[]>(`${environment.dataUrl}/players.json`).pipe(
      tap((players) => {
        this.players = players;
        this.loaded = true;
      })
    );
  }

  private getNextId(): number {
    const ids = this.players.map((player) => player.id ?? 0);
    return Math.max(...ids, 0) + 1;
  }

  private getPosition(positionId: number): Player['position'] {
    const positions: Record<number, Player['position']> = {
      1: { id: 1, name: 'Goalkeeper', displayOrder: 1 },
      2: { id: 2, name: 'Defense', displayOrder: 2 },
      3: { id: 3, name: 'Midfield', displayOrder: 3 },
      4: { id: 4, name: 'Attack', displayOrder: 4 },
    };

    return positions[positionId];
  }
}
