import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MovieService } from './moviebrowser/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-world';
}
