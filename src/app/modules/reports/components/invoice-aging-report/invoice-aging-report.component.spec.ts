import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAgingReportComponent } from './invoice-aging-report.component';

describe('InvoiceAgingReportComponent', () => {
  let component: InvoiceAgingReportComponent;
  let fixture: ComponentFixture<InvoiceAgingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceAgingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAgingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
