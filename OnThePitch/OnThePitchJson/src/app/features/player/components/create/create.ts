import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from '../../../Players/models/player.model';
import { Position } from '../../../../features/position/models/position.model';
import { Positionservice } from '../../../../features/position/services/positionservice';
import { Playerservice } from '../../services/playerservice';

@Component({
  selector: 'app-create',
  imports: [CdkDrag, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create implements OnInit {
  positions$: Observable<Position[]>;
  createForm: FormGroup;
  errorMessage = '';

  constructor(
    private playerService: Playerservice,
    private positionsService: Positionservice,
    private router: Router
  ) {
    this.createForm = new FormGroup({
      shirtNo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      positionId: new FormControl('', [Validators.required]),
      positionX: new FormControl(0, [Validators.required]),
      positionY: new FormControl(0, [Validators.required]),
      appearances: new FormControl('', [Validators.required]),
      goals: new FormControl('', [Validators.required]),
      goalspermatch: new FormControl('', [Validators.required]),
    });

    this.positions$ = new Observable<Position[]>();
  }

  ngOnInit(): void {
    this.positions$ = this.positionsService.getPositions();
  }

  onDragEnded(event: CdkDragEnd): void {
    const element = event.source.getRootElement();
    const parent = element.parentElement;

    if (!parent) {
      return;
    }

    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const x = Math.round(elementRect.left - parentRect.left + parent.scrollLeft);
    const y = Math.round(elementRect.top - parentRect.top + parent.scrollTop);

    this.createForm.get('positionX')?.patchValue(x);
    this.createForm.get('positionY')?.patchValue(y);
  }

  onSubmit(): void {
    if (this.createForm.invalid) {
      return;
    }

    const formValue = this.createForm.value;
    const player: Player = {
      shirtNo: Number(formValue.shirtNo),
      name: formValue.name ?? '',
      positionId: Number(formValue.positionId),
      positionX: Number(formValue.positionX),
      positionY: Number(formValue.positionY),
      appearances: Number(formValue.appearances),
      goals: Number(formValue.goals),
      goalsPerMatch: Number(formValue.goalspermatch),
    };

    this.playerService.createPlayer(player).subscribe({
      next: () => this.router.navigate(['/players']),
      error: () => {
        this.errorMessage = 'Speler aanmaken is niet gelukt.';
      },
    });
  }
}
