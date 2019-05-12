import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Movie } from 'src/app/movie';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/";
@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  apiUrlWithQuery = "https://api.themoviedb.org/3/search/movie?api_key=1a6cff734352b11e02adb59e1b0ac670&language=hu&query=";
  apiUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=1a6cff734352b11e02adb59e1b0ac670&language=hu";

  getMovies (query: string): Observable<any[]> {
    var fullQuery;
    if(query != ""){
      fullQuery = this.apiUrlWithQuery + query;
    } else {
      fullQuery = this.apiUrl;
    }
    return this.http.get<any[]>(fullQuery)
      .pipe(
        tap(heroes => console.log('Movies loaded')),
        catchError(this.handleError('getMovies', []))
      );
  }

  getMovie(id: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=1a6cff734352b11e02adb59e1b0ac670&language=hu-Hu';
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched movie id=${id}`)),
      catchError(this.handleError<any>(`getMovie id=${id}`))
    );
  }


  getMovieCredits(id: number): Observable<any> {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=1a6cff734352b11e02adb59e1b0ac670';
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched movie credit id=${id}`)),
      catchError(this.handleError<any>(`getMovieCredits id=${id}`))
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
