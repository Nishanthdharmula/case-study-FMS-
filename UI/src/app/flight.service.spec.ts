import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Flight } from './flight';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { FlightService } from './flight.service';

fdescribe('FlightService', () => {
  let service: FlightService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService]
    });
    service = TestBed.inject(FlightService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Flights from http', ()=>{
    // arrange
    let dummyFlights:Flight[] = [
      {flightId:1, flightName:'name', from: '',
      to: '',
      date: '',
      time: 1,
      price: ''}
    ];

    // act
    service.getFlightsList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyFlights);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyFlights);
  });

  it('should get all 2 Flights from http', ()=>{
    // arrange
    let dummyFlights:Flight[] = [
      {flightId:1, flightName:'name', from: '',
      to: '',
      date: '',
      time: 1,
      price: ''},
      {flightId:2, flightName:'names', from: '',
      to: '',
      date: '',
      time: 11,
      price: ''}
    ];

    // act
    service.getFlightsList().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyFlights);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyFlights);
  });

  it('should add an employee and return it', () => {
    let dummyFlights:Flight = 
      {flightId:1, flightName:'name', from: '',
      to: '',
      date: '',
      time: 1,
      price: ''}
    ;

    service.createFlight(dummyFlights).subscribe(
      data => expect(data).toEqual(dummyFlights, 'should return the Flight'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyFlights);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyFlights });
    req.event(expectedResponse);
  });

  it('should update an employee and return it', () => {
    let dummyFlights:Flight = 
      {flightId:1, flightName:'name', from: '',
      to: '',
      date: '',
      time: 1,
      price: ''}
    ;

    service.createFlight(dummyFlights).subscribe(
      data => expect(data).toEqual(dummyFlights, 'should return the employee'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyFlights);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyFlights });
    req.event(expectedResponse);
  });


});
