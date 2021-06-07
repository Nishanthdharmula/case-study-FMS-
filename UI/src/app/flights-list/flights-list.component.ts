import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  p : number =1;

  flights: Flight[];

  searchFlightName:string="";

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.getFlights();
  }
  private getFlights() {
    this.flightService.getFlightsList().subscribe(data => {
      this.flights = data;
    });
  }

  updateFlight(flightId: number){
    this.router.navigate(['update-flight', flightId]);
  }

  

  deleteFlights(flightId: number){
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
        this.deleteFlight(flightId)
        
      }
      window.location.reload();
    });
    
  }

  deleteFlight(id: number){
    this.flightService.deleteFlight(id).subscribe(data => {
      console.log(data);
      this.getFlights();
    })
    
  }
}

  /*deleteFlight(flightId: number){

    const confirmBox =window.confirm("Are you sure you wish to delete this flight?") 
                    if (confirmBox === true) {
                      this.flightService.deleteFlight(flightId).subscribe(data => {
                        console.log(data);
                        this.getFlights();
                        
                      })
                      window.location.reload();
                    }}*/
   

//}

/*alert(flightId: number){
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
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  });
}*/