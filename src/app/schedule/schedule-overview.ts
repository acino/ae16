import {Component} from 'angular2/core';
import {ScheduleService} from './schedule.service';
import {OnInit} from 'angular2/core';
import {Schedule} from './schedule';
import {Router} from 'angular2/router';

@Component({
  selector: 'schedule',
  styles: [ require('./schedule-overview.css') ],
  template: require('./schedule-overview.html')
})
export class ScheduleOverview implements OnInit {
  private schedule: Schedule;

  private hasSchedule: boolean = false;
  private loading: boolean = false;

  constructor(public router: Router, public scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.loading = true;
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data;
      this.hasSchedule = this.schedule && this.schedule.hasOwnProperty('blocks');
      this.loading = false;
    },
    (ignored: Error) => {
      this.schedule = undefined;
      this.hasSchedule = false;
      this.loading = false;
    });
  }

  onSessionClick(slug: string) {
    if (slug) {
      this.router.navigate(['SessionDetail', { slug: slug }]);
    }
  }
}
