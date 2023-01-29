import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { NgIf } from "@angular/common";
import { ListingPreview } from "@markets/api-service";

type LoadingStrategy = 'lazy' | 'eager';

@Component({
  selector: 'markets-preview-listing',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <ng-container *ngIf="listingPreview as listing">
      <article class="preview-listing">
        <div class="preview-listing-img-box">
          <img
            [src]="listing.thumbnailUrl"
            class="preview-listing-img"
            [attr.fetchpriority]="loading === 'eager' ? 'high' : 'low'"
            [attr.loading]="loading"
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
  `,
  styleUrls: ['./preview-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewListingComponent implements OnInit {

  @Input() listingPreview!: ListingPreview;
  @Input() loading!: LoadingStrategy;

  constructor() {}

  ngOnInit(): void {}
}
