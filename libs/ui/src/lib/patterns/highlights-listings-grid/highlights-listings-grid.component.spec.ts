import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsListingsGridComponent } from "@markets/ui";

describe('HighlightsListingsGridComponent', () => {
  let component: HighlightsListingsGridComponent;
  let fixture: ComponentFixture<HighlightsListingsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsListingsGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsListingsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
