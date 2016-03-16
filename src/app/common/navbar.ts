import {Component} from 'angular2/core';

@Component({
  selector: 'ae-navbar',
  template: `
    <nav class="ae-navbar">
      <ul><!--
        --><li><a [routerLink]="['Home']">Home</a></li><!--
        --><li><a [routerLink]="['Schedule']">Schedule</a></li><!--
        --><li><a [routerLink]="['Speakers']">Speakers</a></li><!--
      --></ul>
    </nav>
  `,
  styles: [ require('./navbar.css') ]
})
export class Navbar {

}
