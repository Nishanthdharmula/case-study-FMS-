import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';


import { ReviewService } from './review.service';
import { Review } from './review';

describe('ReviewService', () => {
  let service: ReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


fdescribe('ReviewService', () => {
  let service: ReviewService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewService]
    });
    service = TestBed.inject(ReviewService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Review from http', ()=>{
    // arrange
    let dummyReview:Review[] = [
      { username:'name', rating: '',
     
      feedback: ''}
    ];

    // act
    service.getReviewsList().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyReview);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyReview);
  });

  it('should get all 2 Review from http', ()=>{
    // arrange
    let dummyReview:Review[] = [
      { username:'name', rating: '',
     
      feedback: ''},
      { username:'names', rating: '',
     
      feedback: ''}
    ];

    // act
    service.getReviewsList().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyReview);
    });

    // http mock
    let req = httpMock.expectOne(service.baseURL1);
    expect(req.request.method).toBe("GET");
    req.flush(dummyReview);
  });

  it('should add an Review and return it', () => {
    let dummyReview:Review = 
    { username:'name', rating: '',
     
    feedback: ''}
    ;

    service.createReview(dummyReview).subscribe(
      data => expect(data).toEqual(dummyReview, 'should return the Flight'),
      fail
    );

    
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyReview);

    
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyReview });
    req.event(expectedResponse);
  });

  it('should update an Review and return it', () => {
    let dummyReview:Review = 
    { username:'name', rating: '',
     
    feedback: ''}
    ;

    service.createReview(dummyReview).subscribe(
      data => expect(data).toEqual(dummyReview, 'should return the employee'),
      fail
    );

    // addEmploye should have made one request to POST employee
    const req = httpMock.expectOne(service.baseURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(dummyReview);

    // Expect server to return the employee after POST
    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: dummyReview });
    req.event(expectedResponse);
  });


});
