import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  getMovies(query: string) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=1a6cff734352b11e02adb59e1b0ac670&language=hu&query=" + query);
  }
}
