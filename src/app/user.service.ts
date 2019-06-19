import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class userDataService {
  constructor(private http: HttpClient) { }
  //https://api.github.com/repos/${username}/asteroids/languages
   apiUrl = 'https://api.github.com';

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUsercount() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getUserrepo(username: any) {
    return this.http.get(`${this.apiUrl}/users/${username}/repos`);
  }

  getlanguages(username:any,repo:any){
    return this.http.get(`${this.apiUrl}/repos/${username}/${repo}/languages`);
  }
}
