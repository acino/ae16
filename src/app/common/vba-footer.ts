import {Component} from 'angular2/core';

@Component({
    'selector': 'vba-footer',
    'styles': [ require('./vba-footer.css') ],
    'template': `
  <div class="container-fluid footer-container">
    <div class="container text-center" style="padding: 32px;">
      <div class="col-xs-12">
        <strong>Värdar</strong><br>
        <img class="acino-logo" src="/assets/img/acinologo-black.png" alt="">
      </div>
      <div class="col-xs-12 col-sm-4">
        <strong>Kontakta oss</strong>
        <ul>
          <li><a href="mailto:academy@acino.se">academy@acino.se</a></li>
          <li><a href="http://acino.se/academy">acino.se/academy</a></li>
          <li><a href="https://facebook.com/AcinoAcademy">Acino Academy på Facebook</a></li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-4">
        <strong>#AgileExchange16 på nätet</strong>
        <ul>
          <li><a href="https://www.facebook.com/search/top/?q=agileexchange16">Facebook</a></li>
          <li><a href="https://www.instagram.com/explore/tags/agileexchange16/">Instagram</a></li>
          <li><a href="https://twitter.com/search?q=AgileExchange16">Twitter</a></li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-4">
        <strong>Länkar</strong>
        <ul>
          <li><a href="https://www.acino.se">Acino</a></li>
          <li><a href="https://agilaume.wordpress.com/">AgilaUme</a></li>
          <li><a href="https://www.infotechumea.se">InfoTech Umeå</a></li>
        </ul>
      </div>
    </div>
  </div>`
})

export class VbaFooter {

}
