import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '@markets/shared/environments';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'markets-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="footer-nav">
    <a>
      <img
        loading="lazy"
        class="footer-logo"
        alt="footer navigation logo"
        [src]="footerLogoSrc"
      >
    </a>
    <menu class="footer-buscador-menu">
      <li class="footer-menu-category">Buscador</li>
      <a><li>Lanchas</li></a>
      <a><li>Veleros</li></a>
      <a><li>Motos</li></a>
      <a><li>Yates</li></a>
    </menu>
    <menu class="footer-menu-menu">
      <li class="footer-menu-category">Menu</li>
      <a><li>Distribuidores</li></a>
      <a><li>Servicios</li></a>
      <a><li>Clima</li></a>
    </menu>
    <menu class="footer-contacto-menu">
      <li class="footer-menu-category">Contacto</li>
    </menu>
  </nav>
  <div class='footer-reserve'>
    <div>® 2022 Mexico Marino</div>
  </div>
  `,
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  readonly footerLogoSrc = environment.footerLogoSrc;
}
