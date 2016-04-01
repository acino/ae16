import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {SpeakerService} from './speaker.service';
import {OnInit} from 'angular2/core';
import {Speaker} from './speaker';

@Component({
  selector: 'speaker-detail',
  template: require('./speaker-detail.html'),
  styles: [ require('./speaker-detail.css') ]
})
export class SpeakerDetail implements OnInit {
  private hasSpeaker: boolean = false;
  private loading: boolean = false;
  private query = { slug: '' };

  public speaker: Speaker = undefined;

  constructor(public routeParams: RouteParams, public speakerService: SpeakerService) {
    this.hasSpeaker = false;
    this.loading = true;
    this.query.slug = routeParams.get('slug') || undefined;
  }

  ngOnInit():any {
    this.speakerService.getSpeaker(this.query.slug).then((speaker: Speaker) => {
      this.speaker = speaker;
      this.loading = false;
      this.hasSpeaker = this.speaker != undefined;
    });
  }
}
