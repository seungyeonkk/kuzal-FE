import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'})
};
const apiUrl = 'http://localhost:8081';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }

    private extractData(res: Response) {
        const body = res;
        return body || { };
    }

    getDatas(url: string): Observable<any> {
        return this.http.get(apiUrl + url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    getData(url: string): Observable<any> {
        return this.http.get(apiUrl +  url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    postData(url: string, data: any): Observable<any> {
        return this.http.post(apiUrl + url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    updateData(url: string, data: any): Observable<any> {
        return this.http.put(apiUrl + url, data, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteData(url: string): Observable<any> {
        return this.http.delete(apiUrl + url, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

}
