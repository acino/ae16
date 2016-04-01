import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {SpeakerList} from './speaker-list';
import {SpeakerDetail} from './speaker-detail';

@RouteConfig([
  { path: '/', name: 'SpeakerList', component: SpeakerList, useAsDefault: true},
  { path: '/:slug', name: 'SpeakerDetail', component: SpeakerDetail }
])
@Component({
  selector: 'speakers',
  template: '<router-outlet></router-outlet>'
})
export class SpeakersRoot {

}
