import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightsRoutingModule } from './highlights-routing.module';
import { HighlightsComponent } from './highlights.component';
import { HlListingsComponent } from '../hl-listings/hl-listings.component';

@NgModule({
  declarations: [
    HighlightsComponent,
    HlListingsComponent,
  ],
  imports: [
    CommonModule,
    HighlightsRoutingModule,
  ]
})
export class HighlightsModule { }
