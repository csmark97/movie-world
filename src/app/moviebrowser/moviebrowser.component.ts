import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-moviebrowser',
  templateUrl: './moviebrowser.component.html',
  styleUrls: ['./moviebrowser.component.css'],
  providers: [ MovieService ]
})
export class MoviebrowserComponent implements OnInit {

  query = "";

  ngOnInit() {
  }

  constructor(private movieService: MovieService) {  }

  onGet(query: string) {
    this.movieService.getMovies(query).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onUpdateQuery(event: Event){
    this.query = (<HTMLInputElement>event.target).value;
  }
}
