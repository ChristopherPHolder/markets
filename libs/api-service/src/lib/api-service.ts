import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

import { LinkService } from '@markets/link-service';
import { environment } from '@markets/shared/environments';

import { HighlightListingsPreviews } from "./types";


@Injectable()
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

  private _fetch<T>(): Observable<T> {
    return fromFetch<T>(this.apiEndpoint, {
      selector: response => response.json()
    }).pipe(
      shareReplay(),
      map(response => response),
    );

  }

  addPreloadLCPLinks():void {
    this.getHighlightListings().pipe(tap((listings) => {
      if (!listings) {
        return;
      }
      for (let i = 0; i < 2; i++) {
        this.linkService.addLink({
          rel: 'preload',
          as: 'image',
          href: listings["watercrafts"][i].thumbnailUrl,
          fetchpriority: 'high'
        });
      }
    })).subscribe();
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
