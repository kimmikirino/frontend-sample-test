import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { Repo } from './../models/repos.model';

const params = new HttpParams().set('client_id', '693ce4d187b061cae083');

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  // private client_id = '693ce4d187b061cae083';
  // private client_secret = 'a06956d081ac608fae698b398d8281dce1db0103';

  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}users/${username}`, {params});
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseURL}users/${username}/repos`, { params });
  }

}
