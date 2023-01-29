import { Route } from '@angular/router';
import { HighlightsResolver } from "./highlights/highlights.resolver.service";
import { HighlightsComponent } from "./highlights/highlights.component";

export const featuresRoutes: Route[] = [
  {
    path: '',
    component: HighlightsComponent,
    resolve: { highlights$: HighlightsResolver },
  },
];
