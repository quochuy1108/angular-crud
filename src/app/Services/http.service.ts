import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {Users} from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string = 'http://localhost:3000'


  constructor(private http: HttpClient,) {}


  public getUser(): Observable<Users[]> {
    const url = `${this.url}/users`
    return this.http.get<Users[]>(url)
    // .pipe(
    //   catchError(this.handleError<Users[]>('getUser', []))
    // );
  }

  public getUserById(id:number): Observable<any> {
    const url = `${this.url}/users/${id}`
    return this.http.get<Users[]>(url)
  }

  public addUser(data:Users): Observable<Users[]> {
    const url = `${this.url}/users`
    return this.http.post<Users[]>(url,data)
  }

  public deleteUser(id:number): Observable<Users[]> {
    const url = `${this.url}/users/${id}`
    return this.http.delete<Users[]>(url)
  }

  public editUser(payload:Users,id:number): Observable<Users[]> {
    const url = `${this.url}/users/${id}`

    return this.http.put<Users[]>(url,payload)
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * param operation - name of the operation that failed
 * param result - optional value to return as the observable result
 */
//  private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     this.log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }

}
