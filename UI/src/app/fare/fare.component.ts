import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fare } from '../fare';
import { FareService } from '../fare.service';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.css']
})
export class FareComponent implements OnInit {

  fares: Fare[];

  searchFlightName:string="";

  constructor(private fareService: FareService, private router: Router) { }

  ngOnInit(): void {
    this.getFare();
  }
  private getFare() {
    this.fareService.getFareList().subscribe(data => {
      this.fares = data;
    });
  }
}
