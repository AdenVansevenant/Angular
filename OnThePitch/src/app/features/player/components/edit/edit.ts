import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Player } from '../../../Players/models/player.model';
import { Position } from '../../../../features/position/models/position.model';
import { Positionservice } from '../../../../features/position/services/positionservice';
import { Playerservice } from '../../services/playerservice';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, RouterLink, CdkDrag],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly playerService = inject(Playerservice);
  private readonly positionService = inject(Positionservice);

  playerId = 0;
  positions: Position[] = [];
  errorMessage = '';

  editForm = this.fb.group({
    id: [0],
    shirtNo: [0, [Validators.required, Validators.min(1)]],
    name: ['', Validators.required],
    positionId: [0, [Validators.required, Validators.min(1)]],
    appearances: [0],
    goals: [0],
    positionX: [0],
    positionY: [0],
    goalsPerMatch: [0],
  });

  ngOnInit(): void {
    this.playerId = Number(this.route.snapshot.paramMap.get('id'));

    this.positionService.getPositions().subscribe({
      next: (positions) => {
        this.positions = positions;
      },
      error: () => {
        this.errorMessage = 'Posities ophalen is niet gelukt.';
      },
    });

    this.playerService.getPlayer(this.playerId).subscribe({
      next: (player) => {
        this.editForm.patchValue(player);
      },
      error: () => {
        this.errorMessage = 'Speler ophalen is niet gelukt.';
      },
    });
  }

  onDragEnded(event: CdkDragEnd): void {
    const element = event.source.getRootElement();
    const parent = element.parentElement;

    if (!parent) {
      return;
    }

    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    let x = elementRect.left - parentRect.left;
    let y = elementRect.top - parentRect.top;

    x += parent.scrollLeft;
    y += parent.scrollTop;

    this.editForm.get('positionX')?.patchValue(Math.round(x));
    this.editForm.get('positionY')?.patchValue(Math.round(y));
  }

  onSubmit(): void {
    if (this.editForm.invalid) {
      return;
    }

    const formValue = this.editForm.getRawValue();
    const player: Player = {
      id: formValue.id ?? this.playerId,
      shirtNo: formValue.shirtNo ?? 0,
      name: formValue.name ?? '',
      positionId: formValue.positionId ?? 0,
      appearances: formValue.appearances ?? 0,
      goals: formValue.goals ?? 0,
      positionX: formValue.positionX ?? 0,
      positionY: formValue.positionY ?? 0,
      goalsPerMatch: formValue.goalsPerMatch ?? 0,
    };

    this.playerService.updatePlayer(this.playerId, player).subscribe({
      next: () => this.router.navigate(['/players']),
      error: () => {
        this.errorMessage = 'Speler aanpassen is niet gelukt.';
      },
    });
  }
}
