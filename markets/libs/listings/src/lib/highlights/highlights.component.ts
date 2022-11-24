import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ListingPreview } from '@markets/api-service';

@Component({
  selector: 'markets-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HighlightsComponent implements OnInit {
  highlights$?: Observable<ListingPreview[] | null>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.highlights$ = this.activatedRoute.data.pipe(map(data => data['highlights$']));
  }
}
