import { Injectable } from '@nestjs/common';
import { ListingPreview } from '@markets/api-service';
import * as _listing from '../assets/previews-watercraft.json';

@Injectable()
export class AppService {
  private listingPreviews: {previews: ListingPreview[]} = _listing;

  getListingPreviews(): {previews: ListingPreview[]} {
    return this.listingPreviews;
  }
}
