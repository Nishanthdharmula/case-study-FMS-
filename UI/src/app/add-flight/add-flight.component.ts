import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight: Flight = new Flight();

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
  }

  addFlights(){
    Swal.fire({
      title: " Flight is scheduled successfuly",
          text: "added new flight ",
          icon: "success",
        });
  }

  saveFlight(){
    this.flightService.createFlight(this.flight).subscribe( data => {
      console.log(data);
      this.gotoFlightsList();
    },
    error => console.log(error));
  }

  gotoFlightsList(){
    this.router.navigate(['./fv']);
  }

  onSubmit(){
    console.log(this.flight);
    this.saveFlight();

  }

}
