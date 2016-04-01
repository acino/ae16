import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {Home} from './home/home';
import {Schedule} from './schedule/schedule';
import {SpeakersRoot} from './speakers/speakers-root';
import {VbaLogo} from './common/logo';
import {Navbar} from './common/navbar';
import {VbaFooter} from './common/vba-footer';
import {ScheduleRoot} from './schedule/schedule.root';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ require('./app.css') ],
  directives: [Navbar, VbaLogo, VbaFooter]
})
@RouteConfig([
  { path: '/', name: 'Home', component: Home, useAsDefault: true },
  { path: '/schedule/...',  name: 'Schedule',  component: ScheduleRoot },
  { path: '/speakers/...', name: 'Speakers', component: SpeakersRoot },
])
export class App {
  constructor() {
  }
}
