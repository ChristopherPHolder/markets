import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ListingPreview } from '@markets/api-service';

@Component({
  selector: 'markets-hl-listings',
  templateUrl: './hl-listings.component.html',
  styleUrls: ['./hl-listings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HlListingsComponent  {
  imgEndpoint = "https://mexico-marino-deep-blue-eu-central-1.s3.eu-central-1.amazonaws.com/v3/"
  
  @Input() highlights?: ListingPreview[];

  constructor() {
    console.log(this.highlights)
  }

}
