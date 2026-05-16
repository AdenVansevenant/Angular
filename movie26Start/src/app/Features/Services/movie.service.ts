import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie } from '../Models/movie.model';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly http = inject(HttpClient);
  private readonly moviesUrl = 'json/MockMovies.json';
  private readonly movies$ = this.http.get<Movie[]>(this.moviesUrl).pipe(
    shareReplay(1),
    catchError((error) => {
      console.error('Kon films niet laden uit JSON:', error);
      return of([]);
    }),
  );

  getMovies(): Observable<Movie[]> {
    return this.movies$;
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return this.getMovies().pipe(map((movies) => movies.find((movie) => movie.Id === id)));
  }
}
