import { 
  Component, 
  Input, 
  OnInit, 
  ViewEncapsulation 
} from '@angular/core';
import { ListingOverview } from '../mock-highlights';

@Component({
  selector: 'app-hl-listings',
  templateUrl: './hl-listings.component.html',
  styleUrls: ['./hl-listings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HlListingsComponent implements OnInit {

  /* @Input() highlights$?: Observable<ListingOverview[] | null>; */
  
  @Input() highlights?: ListingOverview[];

  constructor() {}

  ngOnInit(): void {}

}
