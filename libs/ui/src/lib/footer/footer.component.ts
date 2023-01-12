import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '@markets/shared/environments';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'markets-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  readonly footerLogoSrc = environment.footerLogoSrc;
}
