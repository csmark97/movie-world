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
  results: any[];

  ngOnInit() {
  }

  constructor(private movieService: MovieService) {  }

  onGet(query: string) {
    this.movieService.getMovies(query).subscribe(
      (response) => {
        this.results = response.json().results;
        console.log(response);
        console.log(this.results);
        console.log("A " + this.results[0].title + " c. film felnőtt tartalom: " + (this.results[0].adult ? "igen" : "nem"));
      },
      (error) => console.log(error)
    );
  }

  onUpdateQuery(event: Event){
    this.query = (<HTMLInputElement>event.target).value;
  }
}
