import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { Player } from '../../../Players/models/player.model';
import { Playerservice } from '../../services/playerservice';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly playerService = inject(Playerservice);

  player$!: Observable<Player | undefined>;
  errorMessage = '';

  ngOnInit(): void {
    this.player$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.playerService.getPlayer(id);
      }),
      catchError(() => {
        this.errorMessage = 'Speler ophalen is niet gelukt.';
        return of(undefined);
      })
    );
  }
}
