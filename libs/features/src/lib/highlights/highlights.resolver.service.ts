import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import {  Resolve } from '@angular/router';
import { HighlightListingsPreviews, ApiService } from 'data-access';
import { Observable } from 'rxjs';
import { LinkService } from "external-resource-link";
import { isPlatformBrowser } from "@angular/common";
import { environment } from 'environments';

@Injectable({providedIn: 'root'})
export class HighlightsResolver implements Resolve<HighlightListingsPreviews | void> {
  private readonly apiEndpoint = environment.apiEndpoint;
  private readonly isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private apiService: ApiService,
    private linkService: LinkService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  resolve(): Observable<HighlightListingsPreviews> | void {
    if (this.isBrowser) {
      return this.apiService.getHighlightListings();
    }
    return this.linkService.addLink({
      rel: 'preload',
      as: 'fetch',
      type: 'application/json',
      href: this.apiEndpoint,
      crossorigin: ''
    });
  }
}

