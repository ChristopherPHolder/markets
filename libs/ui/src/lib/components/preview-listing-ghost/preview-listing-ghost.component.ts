import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'markets-preview-listing-ghost',
  standalone: true,
  template: `
    <article class="preview-listing">
      <div class="preview-listing-img-box"></div>
      <ul class="preview-listing-details ghost-hl-listing-details">
        <li></li>
        <li></li>
        <li class="preview-listing-detail-desc"></li>
      </ul>
    </article>
  `,
  styleUrls: [
    '../preview-listing/preview-listing.component.scss',
    './preview-listing-ghost.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewListingGhostComponent {}
