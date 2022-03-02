import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getApi(){
    const header = new HttpHeaders();
    header.append('Accept', 'application/json');
    header.append('Content-Type', 'application/json');
    const url = 'http://localhost:3000/teste';
    return this.http.get(url, { headers: header}).toPromise();
  }
}
