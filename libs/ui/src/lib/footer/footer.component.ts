import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '@markets/shared/environments';

@Component({
  selector: 'markets-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FooterComponent {
  readonly footerLogoSrc = environment.footerLogoSrc;
}
