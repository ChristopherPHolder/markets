import { Injectable } from '@nestjs/common';
import {ListingPreview} from '@markets/listings';
import * as _listing from '../assets/mock-data.json';

@Injectable()
export class AppService {
  private listingPreviews: ListingPreview[] = _listing.previews;

  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getListingPreviews(): ListingPreview[] {
    return this.listingPreviews;
  }
}
