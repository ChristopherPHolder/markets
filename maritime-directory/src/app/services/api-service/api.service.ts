
import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { map, Observable, of, shareReplay, tap } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { ListingOverview } from "src/app/mock-highlights";
import { LinkService } from "../link-service/link.service";
/* import { HttpClient } from "@angular/common/http"; */

@Injectable()
export class ApiService {

  private endpoint = "http://localhost:3000/highlightListings";

  private highlights$?:  Observable<ListingOverview[]>;

  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private linkService: LinkService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
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
          href: listings[i].thumbnailUrl,
          fetchpriority: "high"
        })
      }
    })).subscribe();
  }

  getHighlightListings(): Observable<ListingOverview[] | null> {
    if (!this.isBrowser) {
      this.addPreloadFetchLink();
      return of(null);
    }
    if (!this.highlights$) {
      this.highlights$ = this.fetchHighlights();
    }
    return  this.highlights$;
  }

  private fetchHighlights(): Observable<ListingOverview[]> {
    /* return this.http.get<ListingOverview[]>(this.endpoint).pipe(shareReplay()); */
    return fromFetch<ListingOverview[]>(this.endpoint, { 
      selector: response => response.json() 
    }).pipe( 
      shareReplay(),
      map((listings) => {
        return listings;
      })
    );
  }

  private addPreloadFetchLink(): void {
    this.linkService.addLink({
      rel: 'preload',
      as: 'fetch',
      type: 'application/json',
      href: this.endpoint,
      crossorigin: ''
    });
  }
}