import { Route } from '@angular/router';
import { HighlightsResolver } from "./highlights/highlights.resolver.service";

export const featuresRoutes: Route[] = [
  {
    path: '',
    resolve: { highlights$: HighlightsResolver },
    loadComponent: () => import('./highlights/highlights.component').then(m => m.HighlightsComponent),
  },
];
