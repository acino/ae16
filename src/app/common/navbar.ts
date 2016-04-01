import {Component} from 'angular2/core';

@Component({
  selector: 'ae-navbar',
  template: `
    <nav class="ae-navbar">
      <ul><!--
        --><li><a [routerLink]="['Home']">Start</a></li><!--
        --><li><a [routerLink]="['Schedule']">Schema</a></li><!--
        --><li><a [routerLink]="['Speakers']">Talare</a></li><!--
      --></ul>
    </nav>
  `,
  styles: [ require('./navbar.css') ]
})
export class Navbar {

}
