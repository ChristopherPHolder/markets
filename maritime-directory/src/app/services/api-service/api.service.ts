
import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, shareReplay } from "rxjs";
import { fromFetch } from "rxjs/fetch"
import { ListingOverview } from "src/app/mock-highlights";

@Injectable()
export class ApiService {
  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    /* private http: HttpClient */
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getHighlightListings(): Observable<ListingOverview[] | null> {
    const endpoint = "http://localhost:3000/highlightListings";
    return this.isBrowser ? fromFetch(endpoint, {
      selector: response => response.json()
    }) : of(null);

    //return this.http.get(endpoint);
  }
}