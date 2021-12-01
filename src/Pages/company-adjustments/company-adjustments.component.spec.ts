import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdjustmentsComponent } from './company-adjustments.component';

describe('CompanyAdjustmentsComponent', () => {
  let component: CompanyAdjustmentsComponent;
  let fixture: ComponentFixture<CompanyAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdjustmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
