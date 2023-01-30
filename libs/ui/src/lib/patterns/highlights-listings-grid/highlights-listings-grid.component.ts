import {
  ChangeDetectionStrategy,
  Component, Input,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";
import {
  PreviewListingComponent,
  PreviewListingGhostComponent,
} from "@markets/ui";
import { ListingPreview } from "data-access";

@Component({
  selector: 'markets-highlights-listings-grid',
  standalone: true,
  imports: [
    PreviewListingComponent,
    PreviewListingGhostComponent,
    NgIf,
    NgForOf
  ],
  template: `
    <ng-container *ngIf="highlights as listings; else loading">
      <ng-container *ngFor="let listing of listings; let i = index">
        <markets-preview-listing
          [listingPreview]="listing"
          [loading]="(i < 2 && isLCP) ? 'eager' : 'lazy'"
        />
      </ng-container>
    </ng-container>

    <ng-template #loading>
      <ng-container *ngFor="let _ of [].constructor(12)">
        <markets-preview-listing-ghost/>
      </ng-container>
    </ng-template>
  `,
  styleUrls: ['./highlights-listings-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsListingsGridComponent implements OnInit {
  @Input() highlights?: ListingPreview[];
  @Input() isLCP?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
