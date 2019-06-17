import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { CoreModule } from './../core.module';
import { User } from './../models/user.model';
import { Repo } from './../models/repos.model';

const params = new HttpParams()
  .set('client_id', '693ce4d187b061cae083')
  .set('client_secret', 'a06956d081ac608fae698b398d8281dce1db0103');

@Injectable({
  providedIn: CoreModule
})

export class GithubService {

  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}users/${username}`, {params});
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.baseURL}users/${username}/repos`, { params });
  }

  searchCommits(username: string, repo: string, query?: string): Observable<[]> {
    return this.http.get<[]>(`${this.baseURL}repos/${username}/${repo}/commits?per_page=10`)
    .pipe(
      catchError(this.handleError<[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
