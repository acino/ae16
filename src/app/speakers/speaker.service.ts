import {Injectable} from "angular2/core";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise'

import {Http} from "angular2/http";

import {Speaker} from "./speaker";
import {Speakers} from "./speakers-root";

@Injectable()
export class SpeakerService {
  speakers: Speaker[] = [];
  speakers$: Observable<Speaker[]>;
  speakersPromise: Promise<Speaker[]>;

  constructor(public http: Http) {
    this.speakers$ = this.fetchSpeakers();
    this.speakersPromise = this.speakers$.toPromise();
    this.speakers$.subscribe((speakers: Speaker[]) => {
      this.speakers = speakers.sort((l: Speaker, r: Speaker) => l.slug.localeCompare(r.slug));
    });
  }

  fetchSpeakers(): Observable<Speakers[]> {
    return this.http.get('/assets/json/speakers.json').map(data => data.json());
  }

  getSpeakers(): Promise<Speaker[]> {
    return this.speakersPromise;
  }

  getSpeaker(slug: string): Promise<Speaker> {
    return this.speakersPromise.then((speakers: Speaker[]) => {
      for (var i = 0, max = speakers.length; i < max; i++) {
        if (speakers[i].slug === slug) {
          return speakers[i];
        }
      }
      return undefined;
    });
  }
}
