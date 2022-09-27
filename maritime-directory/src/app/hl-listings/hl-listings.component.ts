import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation 
} from '@angular/core';
import { Observable } from 'rxjs';
import { ListingOverview } from '../mock-highlights';

@Component({
  selector: 'app-hl-listings',
  templateUrl: './hl-listings.component.html',
  styleUrls: ['./hl-listings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HlListingsComponent implements OnInit {

  @Input() highlights$?: Observable<ListingOverview[] | null>;

  constructor() {}

  ngOnInit(): void {}

}
