import {Component} from 'angular2/core';
import {ScheduleService} from "./schedule.service";
import {OnInit} from "angular2/core";
import {Schedule} from "./schedule";
import {Router} from "angular2/router";

@Component({
  selector: 'schedule',
  styles: [ require('./schedule-overview.css') ],
  template: require('./schedule-overview.html'),
  providers: [ ScheduleService ]
})
export class ScheduleOverview implements OnInit {
  private schedule: Schedule;
  constructor(public router: Router, public scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data;
    });
  }

  onSessionClick(slug: string) {
    if (slug) {
      this.router.navigate(['SessionDetail', { slug: slug }]);
    }
  }
}
