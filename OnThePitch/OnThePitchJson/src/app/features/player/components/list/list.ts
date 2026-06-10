import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { Player } from '../../../Players/models/player.model';
import { Playerservice } from '../../services/playerservice';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  private readonly playerService = inject(Playerservice);

  players$!: Observable<Player[]>;
  errorMessage = '';

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.players$ = this.playerService.getPlayers().pipe(
      tap((players) => {
        console.log('players data:', players);
      }),
      catchError(() => {
        this.errorMessage = 'Spelers ophalen is niet gelukt.';
        return of([]);
      })
    );
  }

  deletePlayer(id?: number): void {
    if (!id) {
      return;
    }

    this.playerService.deletePlayer(id).subscribe({
      next: () => this.loadPlayers(),
      error: () => {
        this.errorMessage = 'Speler verwijderen is niet gelukt.';
      },
    });
  }
}
