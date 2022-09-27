import { Injectable, NgModule } from '@angular/core';
import {  Resolve, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ListingOverview } from './mock-highlights';
import { ApiService } from './services/api-service/api.service';

@Injectable({providedIn: 'root'})
export class HighlightsResolver implements Resolve<ListingOverview[] | null> {

  constructor(private apiService: ApiService) {}

  resolve(): Observable<ListingOverview[] | null> {
    return this.apiService.getHighlightListings();
  }
};

const routes: Routes = [
  {
    path: '', 
    resolve: { highlights$: HighlightsResolver },
    loadChildren: () => 
      import('./highlights/highlights.module')
        .then(m => m.HighlightsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
