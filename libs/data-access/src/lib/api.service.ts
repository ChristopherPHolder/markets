import { Injectable } from "@angular/core";

import { map, Observable, shareReplay } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { environment } from 'environments';

import { HighlightListingsPreviews } from "./types";

@Injectable({providedIn: 'root'})
export class ApiService {
  public highlights$ = this._fetch<HighlightListingsPreviews>('');
  private _fetch<T>(path: string): Observable<T> {
    return fromFetch<T>(environment.apiEndpoint + '/' + path, {
      selector: response => response.json()
    }).pipe(shareReplay(), map(response => response));
  }
}
