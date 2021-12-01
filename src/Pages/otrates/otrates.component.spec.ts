import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTRatesComponent } from './otrates.component';

describe('OTRatesComponent', () => {
  let component: OTRatesComponent;
  let fixture: ComponentFixture<OTRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
