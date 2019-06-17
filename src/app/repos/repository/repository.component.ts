import { Component, OnInit, Input } from '@angular/core';
import { Repo } from './../../core/models/repos.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent {

  @Input() repos: Repo;

}
