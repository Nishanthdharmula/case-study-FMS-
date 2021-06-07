
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookingListComponent } from '../booking-list/booking-list.component';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('CounterComponent (integrated test)', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let router: Router;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BookingComponent, BookingListComponent],
      imports: [RouterTestingModule]
    }).compileComponents(); // This is not needed if you are in the CLI context
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should trigger the navigation to `/Booking-list`', async () => {
    const link = fixture.debugElement.nativeElement.querySelector('.Booking-list-link');

    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  /*it('should trigger the navigation to `/about`', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.about-link');

    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
  }));*/
});
