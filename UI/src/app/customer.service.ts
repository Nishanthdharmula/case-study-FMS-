import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  public baseURL = "http://localhost:8061/Customer/addBookings";
  constructor(private httpClient: HttpClient) { }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, customer);
  }

  public baseURL1 = "http://localhost:8010/Customer/findAllBookings";
  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL1}`);
  }

  private baseURL3 = "http://localhost:8010/Customer/delete";
  deleteBooking(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${id}`);
  }
}
