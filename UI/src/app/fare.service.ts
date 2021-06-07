import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fare } from './fare';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor(private httpClient: HttpClient) { }

  public baseURL1 = "http://localhost:8090/fare/fare";
  
  public baseURL = "http://localhost:8090/fare/fare";

  /*createFare(fare: Fare): Observable<Object>{
    return this.httpClient.get<Fare>(`${this.baseURL1}`, fare);
  }*/

  /*createFare(): Observable<Fare[]>{
    return this.httpClient.get<Fare[]>(`${this.baseURL1}`);
  }*/
  getFaresById(farenum: number): Observable<Fare>{
    return this.httpClient.get<Fare>(`${this.baseURL}/${farenum}`);
  }

  getFareById(bookingId: number): Observable<Fare>{
    return this.httpClient.get<Fare>(`${this.baseURL}/${bookingId}`);
  }

  public baseURL2 = "http://localhost:8090/fare/fares";
  getFareList(): Observable<Fare[]>{
    return this.httpClient.get<Fare[]>(`${this.baseURL2}`);
  }
}
