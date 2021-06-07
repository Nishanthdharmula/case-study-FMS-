import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings: Booking[];

  p : number =1;

  constructor(private bookingService: BookingService,  private router: Router) { }

  ngOnInit(): void {
    this.getBookings();
  }
  private getBookings() {
    this.bookingService.getBookingsList().subscribe(data => {
      this.bookings = data;
    });
  }

  updateBooking(id: number){
    this.router.navigate(['update-flight', id]);
  }

  deleteBookings(bookingId: number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteBooking(bookingId)
        
      }
      window.location.reload();
    });
    
  }

  deleteBooking(bookingId: number){
    this.bookingService.deleteBooking(bookingId).subscribe(data => {
      console.log(data);
      this.getBookings();
    })
  }

}
