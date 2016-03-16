import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Schedule} from "./schedule";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ScheduleService {
  constructor(public http: Http) {
  }

  getSchedule(): Observable<Schedule> {
    return this.http.get('/assets/json/schedule.json').map(data => data.json());
  }
}
