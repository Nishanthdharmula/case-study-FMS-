import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { User } from './user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/*fdescribe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Flights from http', ()=>{
    // arrange
    let dummyEmployees:User[] = [
      {id:1, userName:"nishu", email:'e',
      password: ''
      }
    ];

    // act
    service.getUserBoard().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyEmployees);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyEmployees);
  });

  it('should get all 2 Flights from http', ()=>{
    // arrange
    let dummyEmployees:User[] = [
      {id:1, userName:"nishu", email:'e',
      password: ''
      },
      {id:2, userName:"nishu", email:'e',
      password: ''
      }
    ];

    // act
    service.getUserBoard().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyEmployees);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyEmployees);
  });

  it('should add an user and return it', () => {
    let dummyUser:User = 
    {id:1, userName:"nishu", email:'e',
    password: ''
    }
    ;

    service.createUser(dummyUser).subscribe(
      data => expect(data).toEqual(dummyUser, 'should return the Flight'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyUser);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyUser });
    req.event(expectedResponse);
  });

  it('should update an employee and return it', () => {
    let dummyFlights:User = 
    {id:1, userName:"nishu", email:'e',
    password: ''
    }
    ;

    service.createUser(dummyUser).subscribe(
      data => expect(data).toEqual(dummyUser, 'should return the employee'),
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


});*/

