import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="d-flex justify-content-center my-5">
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `,
  styles: []
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
