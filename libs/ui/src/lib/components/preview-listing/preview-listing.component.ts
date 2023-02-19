import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from "@angular/core";
import { NgIf } from "@angular/common";
import { ListingPreview } from "data-access";

type LoadingStrategy = "lazy" | "eager";

@Component({
  selector: "markets-preview-listing",
  standalone: true,
  imports: [NgIf],
  template: `
    <ng-container *ngIf="listingPreview as listing; else loading">
      <article class="preview-listing">
        <div class="preview-listing-img-box">
          <img
            [attr.loading]="loadingStrategy"
            [src]="listing.thumbnailUrl"
            class="preview-listing-img"
            [attr.fetchpriority]="loadingStrategy === 'eager' ? 'high' : 'low'"
            [attr.decoding]="loadingStrategy === 'eager' ? 'sync' : 'async'"
          >
        </div>
        <ul class="preview-listing-details">
          <li class="preview-listing-price">{{listing.price}}</li>
          <li>
            <span *ngIf="listing.year">{{listing.year}} | </span>
            {{listing.category}}
          </li>
          <li class="preview-listing-detail-desc">{{listing.description}}</li>
        </ul>
      </article>
    </ng-container>
    <ng-template #loading>
      <article class="preview-listing">
        <div class="preview-listing-img-box">
          <img
            loading="lazy"
            fetchpriority="low"
            decoding="async"
            class="preview-listing-img"
            src="/assets/image-placeholder.svg"
          >
        </div>
        <ul class="preview-listing-details ghost-hl-listing-details">
          <li></li>
          <li></li>
          <li class="preview-listing-detail-desc"></li>
        </ul>
      </article>
    </ng-template>
  `,
  styleUrls: ["./preview-listing.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewListingComponent {
  @Input() listingPreview?: ListingPreview;
  @Input() loadingStrategy?: LoadingStrategy;
}
