import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightsComponent } from './highlights/highlights.component';
import { HlListingsComponent } from './hl-listings/hl-listings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HighlightsComponent, HlListingsComponent],
  exports: [HighlightsComponent, HlListingsComponent],
})
export class ListingsModule {}
