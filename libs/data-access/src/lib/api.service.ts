import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

import { map, Observable, of, shareReplay } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

import { LinkService } from 'external-resource-link';
import { environment } from 'environments';

import { HighlightListingsPreviews } from "./types";

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly apiEndpoint = environment.apiEndpoint;
  private highlights$?:  Observable<HighlightListingsPreviews>;
  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private linkService: LinkService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  getHighlightListings(): Observable<HighlightListingsPreviews | null> {
    if (!this.isBrowser) {
      this.addPreloadFetchLink();
      return of(null);
    }
    if (!this.highlights$) {
      this.highlights$ = this.fetchHighlights();
    }
    return  this.highlights$;
  }

  private fetchHighlights(): Observable<HighlightListingsPreviews> {
    return fromFetch<HighlightListingsPreviews>(this.apiEndpoint, {
      selector: response => response.json()
    }).pipe(
      shareReplay(),
      map(response => response),
    );
  }


  private addPreloadFetchLink(): void {
    this.linkService.addLink({
      rel: 'preload',
      as: 'fetch',
      type: 'application/json',
      href: this.apiEndpoint,
      crossorigin: ''
    });
  }
}
