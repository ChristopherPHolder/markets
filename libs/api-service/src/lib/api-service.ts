import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { map, Observable, of, shareReplay, tap } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { LinkService } from "@markets/link-service"

export interface ListingPreview {
  id: number;
  url: string;
  thumbnailUrl: string;
  type: 'watercraft' | string;
  category?: 'Lancha' | string;
  title?: string;
  condition?: string;
  price: string;
  year?: number;
  description?: string;
}

@Injectable()
export class ApiService {

  private endpoint = "http://localhost:3333/api";

  private highlights$?:  Observable<ListingPreview[]>;

  readonly isBrowser: boolean;

  private imgEndpoint = "https://mexico-marino-deep-blue-eu-central-1.s3.eu-central-1.amazonaws.com/v3/"

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
          href: this.imgEndpoint + listings[i].thumbnailUrl,
          fetchpriority: "high"
        })
      }
    })).subscribe();
  }

  getHighlightListings(): Observable<ListingPreview[] | null> {
    if (!this.isBrowser) {
      this.addPreloadFetchLink();
      return of(null);
    }
    if (!this.highlights$) {
      this.highlights$ = this.fetchHighlights();
    }
    console.log('t', this.highlights$?.subscribe((d) => {
      console.log(d);
      return d;
    }));
    return  this.highlights$;
  }

  private fetchHighlights(): Observable<ListingPreview[]> {
    return fromFetch<ListingPreview[]>(this.endpoint, { 
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