import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewListingComponent } from "ui";

describe('PreviewListingComponent', () => {
  let component: PreviewListingComponent;
  let fixture: ComponentFixture<PreviewListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
