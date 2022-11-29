import { Injectable } from '@nestjs/common';
import { HighlightListingsPreviews } from '@markets/api-service';
import * as _highlightListings from '../assets/highlights.json';

@Injectable()
export class AppService {
  private highlightListings: HighlightListingsPreviews = _highlightListings;

  getHighlightListings(): HighlightListingsPreviews {
    return this.highlightListings;
  }
}
