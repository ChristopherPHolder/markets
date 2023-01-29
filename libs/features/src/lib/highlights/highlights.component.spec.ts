import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsComponent } from './highlights.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('HighlightsComponent', () => {
  let component: HighlightsComponent;
  let fixture: ComponentFixture<HighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
