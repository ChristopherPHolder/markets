import { Injectable, NgModule } from '@angular/core';
import {  Resolve, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ListingPreview } from '@markets/api-service';
import { ApiService } from '@markets/api-service';

@Injectable({providedIn: 'root'})
export class HighlightsResolver implements Resolve<ListingPreview[] | null> {
  constructor(private apiService: ApiService) {}
  resolve(): Observable<ListingPreview[] | null> {
    return this.apiService.getHighlightListings();
  }
}

const routes: Routes = [
  {
    path: '', 
    resolve: { highlights$: HighlightsResolver },
    loadChildren: () => import('@markets/listings').then(m => m.ListingsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }