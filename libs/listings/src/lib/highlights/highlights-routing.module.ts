import { Injectable, NgModule } from '@angular/core';
import {  Resolve, RouterModule, Routes } from '@angular/router';

import { HighlightListingsPreviews } from '@markets/api-service';
import { ApiService } from '@markets/api-service';

import { HighlightsComponent } from './highlights.component';

import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HighlightsResolver implements Resolve<HighlightListingsPreviews | null> {
  constructor(private apiService: ApiService) {}
  resolve(): Observable<HighlightListingsPreviews | null> {
    return this.apiService.getHighlightListings();
  }
}

const routes: Routes = [
  {
    path: '',
    component: HighlightsComponent,
    resolve: { highlights$: HighlightsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighlightsRoutingModule { }
