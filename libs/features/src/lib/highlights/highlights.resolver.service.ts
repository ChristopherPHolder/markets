import { Injectable } from '@angular/core';
import {  Resolve } from '@angular/router';
import { HighlightListingsPreviews, ApiService } from '@markets/api-service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HighlightsResolver implements Resolve<HighlightListingsPreviews | null> {
  constructor(private apiService: ApiService) {}
  resolve(): Observable<HighlightListingsPreviews | null> {
    return this.apiService.getHighlightListings();
  }
}

