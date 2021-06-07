import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fare } from '../fare';
import { FareService } from '../fare.service';

@Component({
  selector: 'app-fare-post',
  templateUrl: './fare-post.component.html',
  styleUrls: ['./fare-post.component.css']
})
export class FarePostComponent implements OnInit {

  fare: Fare = new Fare();

  id: number;

  constructor(private fareService: FareService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.id = 23;
    console.log(this.id);
    this.fare.bookingId = this.id;
    this.fareService.getFareById(this.id).subscribe(data => {
      console.log(data)
      this.fare = data;
    }, error => console.log(error));
  }

  /*saveFare(){
    this.fareService.createFare(this.fare).subscribe( data => {
      console.log(data);
      this.gotoBookingDetails();
    },
    error => console.log(error));
  }*/

  /*gotoBookingDetails(){
    this.router.navigate(['./pay'])
  }*/
  addBooking(bookingfare: number){
    this.router.navigate(['pay', bookingfare]);
  }

  onSubmit(){
    
    /*console.log(this.fare);
    this.saveFare();*/
  }

  /*addBookings(){

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
        this.router.navigate(["/pay"]);
      }
      
    });
  }*/
}