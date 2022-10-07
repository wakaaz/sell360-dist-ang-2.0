import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersInvListComponent } from './retailers-invoices-list.component';

describe('RetailersInvListComponent', () => {
  let component: RetailersInvListComponent;
  let fixture: ComponentFixture<RetailersInvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailersInvListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersInvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
