import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistibutorDetailsInfoComponent } from './distibutor-details-info.component';

describe('DistibutorDetailsInfoComponent', () => {
  let component: DistibutorDetailsInfoComponent;
  let fixture: ComponentFixture<DistibutorDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistibutorDetailsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistibutorDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
