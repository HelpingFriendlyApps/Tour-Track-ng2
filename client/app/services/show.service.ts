import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShowService {
  constructor(private http: Http) {}

  getAllShows() {
    return this.http
      .get('/shows')
      .map((r: Response) => r.json());
  }

}