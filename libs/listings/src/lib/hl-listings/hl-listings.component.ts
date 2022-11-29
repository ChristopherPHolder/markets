import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ListingPreview } from '@markets/api-service';

@Component({
  selector: 'markets-hl-listings',
  templateUrl: './hl-listings.component.html',
  styleUrls: ['./hl-listings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HlListingsComponent {
  @Input() highlights?: ListingPreview[];
}
