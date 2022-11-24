import { Injectable } from '@nestjs/common';
import { ListingPreview } from '@markets/api-service';
import * as _listing from '../assets/mock-data.json';

@Injectable()
export class AppService {
  private listingPreviews: ListingPreview[] = _listing.previews;

  getListingPreviews(): ListingPreview[] {
    return this.listingPreviews;
  }
}
