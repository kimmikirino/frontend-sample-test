import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private targets = {
    list: "https://api.github.com/users",
    repos: "https://api.github.com/repos",
  }

  private headers: Headers = new Headers();

  constructor(private http: HttpClient) {}

  createGithubHeader () {
    this.headers.set("Content-Type", "application/json");
  }

  getUser (endPoint: string): Observable<any> {
    return this.http.get(this.createUrl(endPoint));
  }

  public getUserListRepo (name: string): Observable<any> {
    return this.http.get(this.createUrl(name, true))
  }

  public getCommits (name: string, repo: string) {
    return this.http.get(this.createRepoUrl(name, repo))
  }

  private createUrl(path: string, repo?) {
    let url = this.targets.list + "/" + path;
    if (repo) url += "/repos";
    return url;
  }

  private createRepoUrl (name:string, repo:string) {
    return this.targets.repos + "/" + name + "/" + repo + "/commits?sort=created";
  }




}
