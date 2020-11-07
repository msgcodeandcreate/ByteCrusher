import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBackendService {

  private url ='https://localhost:44361/';
  constructor(private http: HttpClient) { }

  addPerson(user) {
    const body = JSON.stringify(user)
    return this.http.post(this.url + 'api/User', body);
  }
}
