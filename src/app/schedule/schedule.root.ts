import {Component} from 'angular2/core';
import {ScheduleOverview} from './schedule-overview';
import {SessionDetail} from './session-detail';
import {RouteConfig} from 'angular2/router';

@RouteConfig([
  { path: '/', name: 'ScheduleOverview', component: ScheduleOverview, useAsDefault: true},
  { path: '/:slug', name: 'SessionDetail', component: SessionDetail }
])
@Component({
  selector: 'schedule',
  template: `
    <router-outlet></router-outlet>
  `
})
export class ScheduleRoot {

}
