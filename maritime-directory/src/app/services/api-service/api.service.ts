
import { PLATFORM_ID, Injectable, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, shareReplay } from "rxjs";
import { ListingOverview } from "src/app/mock-highlights";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

  private endpoint = "http://localhost:3000/highlightListings";

  private highlights$?:  Observable<ListingOverview[]>;

  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private http: HttpClient
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getHighlightListings(): Observable<ListingOverview[] | null> {
    if (!this.isBrowser) {
      return of(null);
    }
    if (!this.highlights$) {
      this.highlights$ = this.fetchHighlights();
    }
    return  this.highlights$;
  }

  private fetchHighlights() {
    return this.http.get<ListingOverview[]>(this.endpoint).pipe(shareReplay());
  }
}