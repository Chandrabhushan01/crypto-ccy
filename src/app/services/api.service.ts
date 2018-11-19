import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  requestApi(method: string, url: string, data: any = null): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const option = {
      body: data,
      headers: headers,
    };
    return this.http.request<Observable<any>>(method, url, option);
  }
}
