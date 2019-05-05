import { Component, OnInit } from '@angular/core';
import {MovieService} from './movie.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-moviebrowser',
  templateUrl: './moviebrowser.component.html',
  styleUrls: ['./moviebrowser.component.css'],
  providers: [ MovieService ]
})
export class MoviebrowserComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private movieService: MovieService) {  }

  onGet() {
    this.movieService.getMovies().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
