import { Component } from '@angular/core';

import { ShowService } from './services/show.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../../client/views/app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  shows: any;

  constructor(private showService: ShowService) {}

  getAllShows() {
    this.showService.getAllShows().subscribe(shows => {
      this.shows = shows
      console.log('shows', shows)
      console.log('this.shows', this.shows)
    });
  }

  ngOnInit() {
    console.log('inside ngOnInit')
    this.getAllShows();
  }



}
