import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  

  public baseURL = "http://localhost:8061/booking/addBookings";
  constructor(private httpClient: HttpClient) { }

  createBooking(booking: Booking): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, booking);
  }

  public baseURL1 = "http://localhost:8061/booking/findAllBookings";
  getBookingsList(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL1}`);
  }

  public baseURL2 = "http://localhost:8061/booking/findAllBookings";
  getBookingsById(id: number): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL2}/${id}`);
  }

  public baseURL3 = "http://localhost:8061/booking/delete";
  deleteBooking(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }
}
