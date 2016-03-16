import {Component} from 'angular2/core';

@Component({
  selector: 'vba-logo',
  template: `
  <div class="logo-wrapper text-left">
    <span class="black vba-pre-title text-left">V&auml;sterbotten</span>
    <div class="vba-title">
        <span class="black text-uppercase text-left">Agile</span><span class="orange-as-hell text-uppercase text-left">Exchange2016</span>
    </div>
    <time class="grey-as-dirty vba-date text-left" datetime="2016-04-28T0800">Torsdag den 28:e april 2016 @ <a href="https://goo.gl/maps/WoNDGyTmwRm">P5 V&auml;ven</a></time>
  </div>
  `,
  styles: [ require('./logo.css') ]
})
export class VbaLogo {

}
