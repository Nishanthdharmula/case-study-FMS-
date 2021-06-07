import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BookingService } from './booking.service';
import { Fare } from './fare';

import { FareService } from './fare.service';

describe('FareService', () => {
  let service: FareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


fdescribe('FareService', () => {
  let service: FareService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FareService]
    });
    service = TestBed.inject(FareService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Fare from http', ()=>{
    // arrange
    let dummyFare:Fare[] = [
      { farenum: 1, bookingId:2, 
      bookingfare: 200 }
    ];

    // act
    service.getFareList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyFare);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL2);
    expect(req.request.method).toBe("GET");
    req.flush(dummyFare);
  });

  it('should get all 2 Bookings from http', ()=>{
    // arrange
    let dummyFare:Fare[] = [
      { farenum: 1, bookingId:2, 
        bookingfare: 200 },
        { farenum: 2, bookingId:1, 
          bookingfare: 200 }
    ];

    // act
    service.getFareList().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyFare);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL2);
    expect(req.request.method).toBe("GET");
    req.flush(dummyFare);
  });

  /*it('should add fare and return it', () => {
    let dummyfare:Fare = 
    { farenum: 1, bookingId:2, 
      bookingfare: 200 }
    ;

    service.createFare(dummyfare).subscribe(
      data => expect(data).toEqual(dummyFare, 'should return the Flight'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyFare);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyFare });
    req.event(expectedResponse);
  });

  it('should update an employee and return it', () => {
    let dummyFare:Fare = 
    { farenum: 1, bookingId:2, 
      bookingfare: 200 }
    ;

    service.createFare(dummyFare).subscribe(
      data => expect(data).toEqual(dummyFare, 'should return the employee'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyFare);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyFare });
    req.event(expectedResponse);
  });*/


});

