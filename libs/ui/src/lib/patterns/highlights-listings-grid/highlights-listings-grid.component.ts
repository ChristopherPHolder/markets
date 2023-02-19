import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";
import { PreviewListingComponent } from "../../components/preview-listing/preview-listing.component";

import { ListingPreview } from "data-access";

@Component({
  selector: 'markets-highlights-listings-grid',
  standalone: true,
  imports: [
    PreviewListingComponent,
    NgIf,
    NgForOf
  ],
  template: `
    <ng-container *ngIf="highlights as listings; else loading">
      <ng-container *ngFor="let listing of listings; let i = index">
        <markets-preview-listing
          [listingPreview]="listing"
          [loadingStrategy]="(i < 2 && isLCP) ? 'eager' : 'lazy'"
        />
      </ng-container>
    </ng-container>

    <ng-template #loading>
      <ng-container *ngFor="let _ of [].constructor(12)">
        <markets-preview-listing/>
      </ng-container>
    </ng-template>
  `,
  styleUrls: ['./highlights-listings-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsListingsGridComponent {
  @Input() highlights?: ListingPreview[];
  @Input() isLCP?: boolean;
}
