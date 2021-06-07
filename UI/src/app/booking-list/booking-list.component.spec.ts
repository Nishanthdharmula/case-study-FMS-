import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListComponent } from './booking-list.component';

/*fdescribe('BookingListComponent', () => {
  it('First Test Script', () => {
    console.log('I am inside the test script');
    });
  });*/





describe('BookingListComponent', () => {
  let component: BookingListComponent;
  let fixture: ComponentFixture<BookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});