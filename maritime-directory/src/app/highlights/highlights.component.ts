import { 
  Component, 
  OnInit, 
  ViewEncapsulation 
} from '@angular/core';
import { Observable } from 'rxjs';
import { ListingOverview } from '../mock-highlights';
import { ApiService } from '../services/api-service/api.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HighlightsComponent implements OnInit {
  highlights$?: Observable<ListingOverview[] | null>;

  constructor(
    private api: ApiService
   ) { }

  ngOnInit(): void { 
    this.highlights$ = this.api.getHighlightListings()
  }
}
