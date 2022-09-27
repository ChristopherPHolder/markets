import { 
  Component, 
  OnInit, 
  ViewEncapsulation 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ListingOverview } from '../mock-highlights';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HighlightsComponent implements OnInit {
  highlights$?: Observable<ListingOverview[] | null>;

  constructor(
    /* private api: ApiService */
    private activatedRoute: ActivatedRoute
   ) { }

  ngOnInit(): void {
    /* this.highlights$ = this.api.getHighlightListings() */
    this.highlights$ = this.activatedRoute.data.pipe(
      map(data => data['highlights$'])
    );
  }
}
