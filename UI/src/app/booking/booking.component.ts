import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import  Swal  from 'sweetalert2';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';
import { Fare } from '../fare';
import { FareService } from '../fare.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking: Booking = new Booking();

  id: number;
  flight: Flight = new Flight();

  constructor(private bookingService: BookingService, private flightService: FlightService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.flight = new Flight();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.booking.flightId = this.id;
  }

  saveBooking(){
    this.bookingService.createBooking(this.booking).subscribe( data => {
      console.log(data);
      //this.gotoBookingDetails();
    },
    error => console.log(error));
  }

  /*gotoBookingDetails(){
    this.router.navigate(['./pay'])
  }*/

  onSubmit(){
    /*console.log(this.booking);
    this.saveBooking();*/
  }

  addBookings(){

    Swal.fire({
      title: 'Conform Booking',
      text: "Continue payment",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveBooking();
        this.router.navigate(["/fp"]);
      }
      
    });
  }
}
  

