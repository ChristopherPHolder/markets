import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { environment } from "environments";

@Component({
  selector: 'markets-footer',
  standalone: true,
  template: `
    <picture>
      <source
        media="(min-width: 600px)"
        srcset="https://mexicomarino.com/img/pblsdd/mexico_marino-82e99757.jpg"
      />
      <source
        media="(max-width: 601px)"
        srcset="https://mexicomarino.com/img/pblsdd/mexico_marino-11f83168.jpg"
      />
      <img
        loading="lazy"
        class="footer-banner"
        src="https://mexicomarino.com/img/pblsdd/mexico_marino-82e99757.jpg"
        alt="Explore our services banner"
      >
    </picture>
    <div>

    </div>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly footerLogoSrc = environment.footerLogoSrc;
}
