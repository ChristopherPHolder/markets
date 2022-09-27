import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ListingOverview } from '../mock-highlights';

@Component({
  selector: 'app-hl-listings',
  templateUrl: './hl-listings.component.html',
  styleUrls: ['./hl-listings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HlListingsComponent implements OnInit {
  // @Input() highlights$?: Observable<ListingOverview[]>;
  // @Input() highlights?: ListingOverview[];
  highlights$?: Observable<ListingOverview[]>;
  readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private activatedRoute: ActivatedRoute,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.highlights$ = this.activatedRoute.data.pipe(map(data => data['highlights$']));
  }

  ngOnInit(): void {}
}
