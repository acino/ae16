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
  public speakers: Speaker[] = [];

  private hasSpeakers: boolean = false;
  private loading: boolean = false;

  constructor(public speakerService: SpeakerService) {}

  ngOnInit() {
    this.loading = true;
    this.speakerService.getSpeakers().then((speakers: Speaker[]) => {
      this.speakers = speakers;

      this.hasSpeakers = speakers.length > 0;
      this.loading = false;
    });
  }

}
