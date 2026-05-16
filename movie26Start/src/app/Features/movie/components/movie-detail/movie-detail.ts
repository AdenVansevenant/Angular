import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../../Models/movie.model';
import { MovieService } from '../../../Services/movie.service';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetailComponent implements OnInit {
  private readonly movieService = inject(MovieService);
  private readonly route = inject(ActivatedRoute);

  movie?: Movie;
  isLoaded = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie = movie;
        this.isLoaded = true;
      });
    });
  }
}
