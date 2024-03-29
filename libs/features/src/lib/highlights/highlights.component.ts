import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HighlightListingsPreviews } from 'data-access';
import { HighlightsListingsGridComponent } from "ui";
import { AsyncPipe } from "@angular/common";

@Component({
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
  public readonly highlights$: Observable<HighlightListingsPreviews>;
  constructor(private activatedRoute: ActivatedRoute) {
    this.highlights$ = this.activatedRoute.data.pipe(map(({highlights$}) => highlights$))
  }
}
