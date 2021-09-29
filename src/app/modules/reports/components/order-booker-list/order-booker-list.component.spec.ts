import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookerListComponent } from './order-booker-list.component';

describe('OrderBookerListComponent', () => {
  let component: OrderBookerListComponent;
  let fixture: ComponentFixture<OrderBookerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBookerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
