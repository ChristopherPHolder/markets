import { Injectable } from "@angular/core";

import { map, Observable, shareReplay } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { environment } from 'environments';

import { HighlightListingsPreviews } from "./types";

@Injectable({providedIn: 'root'})
export class ApiService {
  private readonly apiEndpoint = environment.apiEndpoint;
  private highlights$?:  Observable<HighlightListingsPreviews>;
  getHighlightListings(): Observable<HighlightListingsPreviews> {
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
}
