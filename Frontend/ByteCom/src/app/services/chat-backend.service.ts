import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatBackendService {

  private url ='http://35.232.62.44/';
  constructor(private http: HttpClient) { }

  // addPerson(user) {
  //   const httpOptions : any    = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Origin': '*'
  //     })
  //   };
    
  //   // const body = JSON.stringify(user);
  //   return this.http.post('http://35.232.62.44/api/User', user, httpOptions);
  // }

  addUser(user) {
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post('http://kazargodns.cloud/signup.php', user, httpOptions)
  }

  getUser() {
    return this.http.get('http://kazargodns.cloud/gibmirmeineliste.php');
  }

  getTest() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
