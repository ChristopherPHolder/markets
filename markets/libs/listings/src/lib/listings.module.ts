import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsRoutingModule } from './listings-routing.module'
import { HighlightsComponent } from './highlights/highlights.component';
import { HlListingsComponent } from './hl-listings/hl-listings.component';

@NgModule({
  imports: [CommonModule, ListingsRoutingModule],
  declarations: [HighlightsComponent, HlListingsComponent],
  exports: [HighlightsComponent, HlListingsComponent],
})
export class ListingsModule {}
