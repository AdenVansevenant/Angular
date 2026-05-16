import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MovieService } from '../../Services/movie-service';
import { Movie } from '../../Models/movie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [AsyncPipe],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
movies$ : Observable <Movie[]>;


  constructor(private movieService : MovieService, 
    private router: Router) {
    this.movies$ =  new Observable <Movie[]>();
  }

  ngOnInit() {  
    
    this.movies$ = this.movieService.getMovies()
    }

   public onSelect(movie : Movie){
    console.log (movie.Id);
    this.router.navigateByUrl(`/movie-detail/${movie.Id}`);
    //You pass in an array of URL segments
   // this.router.navigate(['/movie-detail', movie.Id]);
    //Router.navigateByUrl is similar to Router.navigate, except that a string is passed in instead of URL segments. 
  }
}
