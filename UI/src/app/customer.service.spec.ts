import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Flight } from './flight';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';


import { CustomerService } from './customer.service';
import { Customer } from './customer';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

fdescribe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    service = TestBed.inject(CustomerService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all customers from http', ()=>{
    // arrange
    let dummyCustomers:Customer[] = [
      {customerId:1, firstName:'name', lastName: 'names',
      contactNumber: '',
      gender: ''
      }
    ];

    // act
    service.getCustomerList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyCustomers);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyCustomers);
  });

  it('should get all 2 customers from http', ()=>{
    // arrange
    let dummyCustomers:Customer[] = [
      {customerId:1, firstName:'name', lastName: 'names',
      contactNumber: '',
      gender: ''
      },
      {customerId:2, firstName:'names', lastName: 'name',
      contactNumber: '',
      gender: ''
      }
    ];

    // act
    service.getCustomerList().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyCustomers);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyCustomers);
  });

  it('should add an customer and return it', () => {
    let dummyCustomers:Customer = 
    {customerId:1, firstName:'name', lastName: 'names',
    contactNumber: '',
    gender: ''
    }
    ;

    service.createCustomer(dummyCustomers).subscribe(
      data => expect(data).toEqual(dummyCustomers, 'should return the Customer'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyCustomers);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyCustomers });
    req.event(expectedResponse);
  });


});

