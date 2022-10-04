import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerInvoicesComponent } from './retailer-invoices.component';

describe('RetailerInvoicesComponent', () => {
  let component: RetailerInvoicesComponent;
  let fixture: ComponentFixture<RetailerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
