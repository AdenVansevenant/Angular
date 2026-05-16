import { Component } from '@angular/core';
import { MovieService } from '../../Services/movie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../Models/movie.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [AsyncPipe],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
movie$ : Observable <Movie| null>;
  id : string | null;

  constructor(private movieService : MovieService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) 
    { 
    this.id = "";
    this.movie$ = new Observable<Movie|null>;
  }

  ngOnInit() {
   
    // book p.252
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('Id');});
       console.log ("comp" + this.id);

     
    if (this.id)
    { 
      
     this.movie$ = this.movieService.getMovie(this.id);
      
    }
       
    
  
  }

  public gotoMovies(){
    
   /* You pass in an array of URL segments to Router.navigate.*/
    this.router.navigate(['/movie-list']);
   //or
   /* Router.navigateByUrl is similar to Router.navigate, except that a string is passed in instead of URL segments. 
    The navigation should be absolute and start with a /.*/
  // this.router.navigateByUrl('/movie-list')
  }
}
