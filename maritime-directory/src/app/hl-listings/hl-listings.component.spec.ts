import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlListingsComponent } from './hl-listings.component';

describe('HlListingsComponent', () => {
  let component: HlListingsComponent;
  let fixture: ComponentFixture<HlListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
