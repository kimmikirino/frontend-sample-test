import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent {

 @Input() commits: any;


}
