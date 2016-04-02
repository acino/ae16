import {Component} from 'angular2/core';
@Component({
  selector: 'vba-loading',
  template: `
    <div style="text-align: center">
      <i class="material-icons rotating loading-spinner">refresh</i>
    </div>
  `
})
export class VbaLoading {}
