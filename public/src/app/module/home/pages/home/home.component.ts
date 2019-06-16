import { EmitterService } from './../../../../behaviour/emitter.service';
import { GithubService } from './../../../../services/github/github.service';
import { Component, OnInit } from '@angular/core';

interface userInfo {
  login: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public list: Array<object> = [];
  public commits: Array<any> = [];
  public reposList: Array<any> = [];
  public search: boolean = false;
  public modal = { status: false, list: [], title: '' }

  constructor(private github: GithubService) { }

  ngOnInit() {
    EmitterService.get("userInfo").subscribe( (userInfo:any) => {
      this.list.push(userInfo);
      this.search = true;
      this.listUserRepos(userInfo.login);
    });
  }

  public listUserRepos (login: string) {
    this.github.getUserListRepo(login).subscribe (data => {
      this.reposList = data;
    }, err => {
      console.error(err);
    });
  }

  public selectLanguage (lang: string) {
    if (lang == null) lang = "";
    if (lang.toLocaleLowerCase() === "javascript") {return "colored javascript"}
    if (lang.toLocaleLowerCase() === "php") {return "colored php"}
    if (lang.toLocaleLowerCase() === "typescript") {return "colored typescript"}
    if (lang.toLocaleLowerCase() === "shell") {return "colored shell"}
    if (lang.toLocaleLowerCase() === "css") {return "colored css"}
    if (lang.toLocaleLowerCase() === "java") {return "colored java"}
    if (lang.toLocaleLowerCase() === "html") {return "colored html"}

    return "other"
  }

  public toggleModal () {
    this.modal.status = !this.modal.status;
  }

  public checkCommits (rep:string, name:string) {
    this.toggleModal();

    this.github.getCommits(name, rep).subscribe( (data:any) => {
      for (let i=0; i < data.length; i++) {
      if (i == 5) break;
      this.commits.push(data[i]);
    }
    }, err=> {
      console.error(err);
    });
   
  }

}
