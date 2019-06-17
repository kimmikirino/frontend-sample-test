import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-repos-listing',
  templateUrl: './repos-listing.component.html',
  styleUrls: ['./repos-listing.component.scss']
})
export class ReposListingComponent implements OnInit {

  username = 'paulalopes21';
  user: User;

  loading = false;
  errorMessage;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getUser(this.username);
  }

  getUser(name: string): void {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getUser(name)
      .subscribe((user) => { this.user = user; },
        (error) => { this.errorMessage = error; this.loading = false; },
        () => { this.loading = false; console.log(this.user); });
  }

}
