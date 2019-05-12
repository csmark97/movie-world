import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: MovieService, private router: Router) { }

  ngOnInit() {
    this.getMovietDetails(this.route.snapshot.params['id']);
    this.getMovieCredits(this.route.snapshot.params['id']);
  }

  movie: any
  credits: any

  isLoadingResults = true;

  getMovietDetails(id) {
    this.api.getMovie(id)
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie);
        this.isLoadingResults = false;
      });
  }

  getMovieCredits(id){
    this.api.getMovieCredits(id)
      .subscribe(data => {
        this.credits = data;
        console.log(this.credits);
        this.isLoadingResults = false;
      });
  }
}
