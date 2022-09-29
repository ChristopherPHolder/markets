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
  imgEndpoint = "https://mexico-marino-deep-blue-eu-central-1.s3.eu-central-1.amazonaws.com/v3/"

  /* @Input() highlights$?: Observable<ListingOverview[] | null>; */
  
  @Input() highlights?: ListingOverview[];

  constructor() {}

  ngOnInit(): void {}

}
