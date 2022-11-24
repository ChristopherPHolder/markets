import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightsRoutingModule } from './highlights/highlights-routing.module';
import { HighlightsComponent } from './highlights/highlights.component';
import { HlListingsComponent } from './hl-listings/hl-listings.component';

@NgModule({
  imports: [CommonModule, HighlightsRoutingModule],
  declarations: [HighlightsComponent, HlListingsComponent],
  exports: [HighlightsComponent, HlListingsComponent],
})
export class ListingsModule {}
