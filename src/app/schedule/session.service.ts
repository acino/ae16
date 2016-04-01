import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Session} from './session';

import 'rxjs/add/operator/filter';

@Injectable()
export class SessionService {
  constructor(public http: Http) {
  }

  getSession(slug: string): Observable<Session> {
    return this.http.get('/assets/json/sessions.json')
      .map(data => data.json())
      .map(data => data.hasOwnProperty(slug) ? data[slug] : undefined);
  }
}
