import { Injectable } from '@angular/core';
import { Movie } from '../Models/movie.model';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';


// Fetching URL from environment variable
const API_URL = environment.MovieURL;

@Injectable({
  providedIn: 'root',
})


export class MovieService {
  // Fetching URL from environment variable

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    
    return this.http.get<Movie[]>(API_URL)
      .pipe(
        tap (result => { console.log ("opgehaald data :" ,result)}),
       /* catchError(err => {console.log (err)} )*/
      );

  }

  getMovie(id: string): Observable<Movie |null>{

    console.log ("service" + id); 
    return this.http.get<Movie[]>(API_URL)
      .pipe(
        map(movies => {
          const movie = movies.filter((cust: Movie) => cust.Id == id);
          return (movie && movie.length) ? movie[0] : null;
        }),
      
      );
}
}
