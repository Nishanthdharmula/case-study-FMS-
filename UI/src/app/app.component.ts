import { Event, Router, NavigationStart, NavigationEnd, RouterEvent, RouterOutlet } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
    //animations: [ // <-- add your animations here
       //fader,
      // slider,
      // transformer,
      // stepper
    //]
  
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  /*prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }*/

  constructor(private tokenStorageService: TokenStorageService) { }
    

  
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
