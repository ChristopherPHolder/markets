import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightsRoutingModule } from './highlights/highlights-routing.module';
import { HighlightsComponent } from './highlights/highlights.component';
import {
  PreviewListingComponent,
  PreviewListingGhostComponent,
} from "@markets/ui";
import {
  HighlightsListingsGridComponent
} from "@markets/ui";

@NgModule({
  imports: [CommonModule, HighlightsRoutingModule, PreviewListingComponent, PreviewListingGhostComponent, HighlightsListingsGridComponent],
  declarations: [HighlightsComponent],
  exports: [HighlightsComponent],
})
export class ListingsModule {}
