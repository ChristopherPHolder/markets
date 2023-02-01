import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewListingGhostComponent } from "ui";

describe('PreviewListingGhostComponent', () => {
  let component: PreviewListingGhostComponent;
  let fixture: ComponentFixture<PreviewListingGhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewListingGhostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewListingGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
