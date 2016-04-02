import {Component, OnInit} from 'angular2/core';
import {Session} from './session';
import {RouteParams} from 'angular2/router';
import {SessionService} from './session.service';

@Component({
  selector: 'session-detail',
  styles: [ require('./session-detail.css') ],
  template: require('./session-detail.html'),
  providers: [ SessionService ]
})
export class SessionDetail implements OnInit {
  public session: Session = undefined;

  private hasSession: boolean = false;
  private loading: boolean = false;
  private query = { slug: '' };

  constructor(public routeParams: RouteParams, public sessionService: SessionService) {
    this.hasSession = false;
    this.loading = true;
    this.query.slug = routeParams.get('slug') || undefined;
  }

  ngOnInit(): any {
    this.sessionService.getSession(this.query.slug).subscribe((session: Session) => {
      this.session = session;
      this.loading = false;
      this.hasSession = this.session !== undefined;
    },
    (ignored: Error) => {
      this.session = undefined;
      this.hasSession = false;
      this.loading = false;
    });
  }
}
