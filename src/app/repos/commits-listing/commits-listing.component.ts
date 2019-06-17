import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-commits-listing',
  templateUrl: './commits-listing.component.html',
  styleUrls: ['./commits-listing.component.scss']
})
export class CommitsListingComponent implements OnInit {
  loading = false;
  errorMessage;
  commits: [];
  username: string;
  repo: string;

  constructor(private activeRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    this.searchCommits();
  }

  searchCommits(): void {
    this.username = this.activeRoute.snapshot.params.user;
    this.repo = this.activeRoute.snapshot.params.repo;

    this.loading = true;
    this.errorMessage = '';

    this.githubService.searchCommits(this.username, this.repo)
      .subscribe((commits) => { this.commits = commits; },
        (error) => { this.errorMessage = error; this.loading = false; },
        () => { this.loading = false; console.log(this.commits); });
  }

}
