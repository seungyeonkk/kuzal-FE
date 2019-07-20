import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

     rootUrl = 'http://localhost:8081';
     httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
            , 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
        })
    };



  constructor(private http: HttpClient) {

  }

    private extractData(res: Response) {
        const body = res;
        return body || { };
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getData(url): Observable<any> {
        return this.http.get(this.rootUrl + url).pipe(
            map(this.extractData));
    }


    postData2(url, params): Observable<any> {
        return this.http.post<any>(this.rootUrl + url, JSON.stringify(params), this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError<any>('addProduct'))
        );
    }


    uploadData(url, params): Observable<any> {

        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'multipart/form-data'
                , 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'
            })
        }

      return this.http.post(this.rootUrl + url, params, this.httpOptions).pipe(
          map(this.extractData)

        );
    }





}
