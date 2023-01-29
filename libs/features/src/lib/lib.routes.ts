import { Route } from '@angular/router';
import { HighlightsResolver } from "./highlights/highlights.resolver.service";
import { HighlightsComponent } from "./highlights/highlights.component";
import { ListingDetailsComponent } from "./listing-details/listing-details.component";

export const featuresRoutes: Route[] = [
  {
    path: '',
    component: HighlightsComponent,
    resolve: { highlights$: HighlightsResolver },
  },
  {
    path: 'listing-details/:listing-id',
    component: ListingDetailsComponent,
    resolve: {}
  }
];
