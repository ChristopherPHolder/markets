import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HighlightListingsPreviews } from '@markets/api-service';
import { HighlightsListingsGridComponent } from "@markets/ui";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "markets-highlights",
  standalone: true,
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [
    HighlightsListingsGridComponent,
    AsyncPipe
  ]
})
export class HighlightsComponent {
  public readonly highlights$?: Observable<HighlightListingsPreviews | null>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.highlights$ = this.activatedRoute.data
      .pipe(map(data => data['highlights$']));
  }
}
