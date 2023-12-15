import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReservationComponent } from './detail-reservation.component';

describe('DetailReservationComponent', () => {
  let component: DetailReservationComponent;
  let fixture: ComponentFixture<DetailReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailReservationComponent]
    });
    fixture = TestBed.createComponent(DetailReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
