
import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from "rxjs";
import { ListingOverview } from "src/app/mock-highlights";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private http: HttpClient
  ) {

    this.isBrowser = isPlatformBrowser(platformId);
    
  }

  getHighlightListings(): Observable<ListingOverview[] | null> {
    const endpoint = "http://localhost:3000/highlightListings";

    if (this.isBrowser) {

      return this.http.get<ListingOverview[]>(endpoint);

    } else {

      return of(null);

    }
  }
}