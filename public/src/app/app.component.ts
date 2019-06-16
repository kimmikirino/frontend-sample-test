import { EmitterService } from './behaviour/emitter.service';
import { GithubService } from './services/github/github.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'sciensa';
  
  public btnText: string = "search";
  public showForm: boolean = false;
  
  constructor (private github: GithubService) {
    
  }

  ngOnInit() {
    
    //this.teste()
    
  }
  
  public search = new FormGroup({
    name: new FormControl('')
  });
  
  public userInfo = {};
  
  public sendSearch () {
    
    if (this.search.controls.name.value != "" && this.search.controls.name.value.length > 2) {
      
      this.btnText = "Searching..."
      this.github.getUser(this.search.controls.name.value).subscribe(
        data=> {
          this.btnText = "Search";
          EmitterService.get("userInfo").emit( data );
        }, 
        err => {
          this.btnText = "Search"; 
          console.error(err); 
        }
      );
    }
  }

  private teste () {
    this.github.getUser("gustavoyukio").subscribe(
      data=> {
        this.btnText = "Search";
        EmitterService.get("userInfo").emit( data );
      }, 
      err => {
        this.btnText = "Search"; 
        console.error(err); 
      }
    );
  }

  public showFormAction () {
    this.showForm = !this.showForm;
  }
    
}
  