import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fare } from '../fare';
import { FareService } from '../fare.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }


  
}
