import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../Models/movie.model';
import { MovieService } from '../../../Services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieListComponent implements OnInit {
  private readonly movieService = inject(MovieService);
  private readonly router = inject(Router);

  movies: Movie[] = [];
  hasLoadError = false;

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.hasLoadError = movies.length === 0;
    });
  }

  goToMovieDetail(id: number): void {
    this.router.navigate(['/movies', id]);
  }
}
