import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Users} from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string = 'http://localhost:3000'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  constructor(private http: HttpClient,) { }


  public getUser(): Observable<Users[]> {
    const url = `${this.url}/users`
    return this.http.get<Users[]>(url,this.httpOptions)
  }

  public getUserById(id:number): Observable<any> {
    const url = `${this.url}/users/${id}`
    return this.http.get<Users[]>(url,this.httpOptions)
  }

  public addUser(data:Users): Observable<Users[]> {
    const url = `${this.url}/users`
    return this.http.post<Users[]>(url,data,this.httpOptions)
  }

  public deleteUser(id:number): Observable<Users[]> {
    const url = `${this.url}/users/${id}`
    return this.http.delete<Users[]>(url,this.httpOptions)
  }

  public editUser(payload:Users,id:number): Observable<Users[]> {
    const url = `${this.url}/users/${id}`

    return this.http.put<Users[]>(url,payload,this.httpOptions)
  }
}
