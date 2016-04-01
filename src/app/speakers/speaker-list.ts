import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {SpeakerService} from './speaker.service';
import {Speaker} from './speaker';
@Component({
  selector: 'speaker-list',
  styles: [require('./speaker-list.css')],
  template: require('./speaker-list.html')
})
export class SpeakerList implements OnInit {
  constructor(public speakerService: SpeakerService) {}

  private speakers: Speaker[] = [];

  ngOnInit() {
    this.speakerService.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers);
  }

}
