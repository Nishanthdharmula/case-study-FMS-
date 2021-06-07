import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Booking } from './booking';

import { BookingService } from './booking.service';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

fdescribe('FlightService', () => {
  let service: BookingService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookingService]
    });
    service = TestBed.inject(BookingService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Flights from http', ()=>{
    // arrange
    let dummyBooking:Booking[] = [
      {bookingId:2, flightId:1, firstNames:'name', lastNames: '',
      contact: '',
      gender: '',
      pnr: 1,
      bookingAmount: 200 }
    ];

    // act
    service.getBookingsList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyBooking);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyBooking);
  });

  it('should get all 2 Bookings from http', ()=>{
    // arrange
    let dummyBooking:Booking[] = [
      {bookingId:2, flightId:1, firstNames:'name', lastNames: '',
      contact: '',
      gender: '',
      pnr: 1,
      bookingAmount: 200 },
      {bookingId:1, flightId:2, firstNames:'name', lastNames: '',
      contact: '',
      gender: '',
      pnr: 2,
      bookingAmount: 200 }
    ];

    // act
    service.getBookingsList().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyBooking);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyBooking);
  });

  it('should add an employee and return it', () => {
    let dummyBookings:Booking = 
    {bookingId:2, flightId:1, firstNames:'name', lastNames: '',
    contact: '',
    gender: '',
    pnr: 1,
    bookingAmount: 200 }
    ;

    service.createBooking(dummyBookings).subscribe(
      data => expect(data).toEqual(dummyBookings, 'should return the Flight'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyBookings);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyBookings });
    req.event(expectedResponse);
  });

  it('should update an employee and return it', () => {
    let dummyBooking:Booking = 
    {bookingId:2, flightId:1, firstNames:'name', lastNames: '',
    contact: '',
    gender: '',
    pnr: 1,
    bookingAmount: 200 }
    ;

    service.createBooking(dummyBooking).subscribe(
      data => expect(data).toEqual(dummyBooking, 'should return the employee'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyBooking);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyBooking });
    req.event(expectedResponse);
  });


});
