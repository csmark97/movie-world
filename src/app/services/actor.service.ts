import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Movie } from 'src/app/movie';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class ActorService {

  constructor(private http: HttpClient) { }

  apiURl= "https://api.themoviedb.org/3/person/";

  getDetails (id: number): Observable<any[]> {
    var fullQuery;
    fullQuery += id + "?api_key=1a6cff734352b11e02adb59e1b0ac67&language=hu-HU";
    return this.http.get<any[]>(fullQuery)
      .pipe(
        tap(heroes => console.log('Movies loaded')),
        catchError(this.handleError('getMovies', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}