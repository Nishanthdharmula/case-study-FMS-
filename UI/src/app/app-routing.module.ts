import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingComponent } from './booking/booking.component';
import { BoookingSuccessfulComponent } from './boooking-successful/boooking-successful.component';
import { CancrlledSuvvessfullyComponent } from './cancrlled-suvvessfully/cancrlled-suvvessfully.component';
import { CustomerComponent } from './customer/customer.component';
import { FarePostComponent } from './fare-post/fare-post.component';
import { FareComponent } from './fare/fare.component';
import { FlightViewComponent } from './flight-view/flight-view.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightsTableComponent } from './flights-table/flights-table.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { NavsComponent } from './navs/navs.component';
import { PayComponent } from './pay/pay.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SignupComponent } from './signup/signup.component';
import { TryComponent } from './try/try.component';


import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'log', component: LogComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'review-list', component: ReviewListComponent},
  {path: 'Booking-list', component: BookingListComponent},
  {path: 'Booking/:id', component: BookingComponent},
  {path: 'Book', component: CustomerComponent},
  {path: 'cancel', component: CancrlledSuvvessfullyComponent},
  {path: 'conform-booking', component: BoookingSuccessfulComponent},
  {path: 'flights', component: FlightsListComponent},
  {path: 'add-flight', component: AddFlightComponent},
  {path: 'flightss', component: FlightsTableComponent},
  {path: 'search-flight', component: SearchFlightComponent},
  {path: 'update-flight/:id', component: UpdateFlightComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'fv', component: FlightViewComponent},
  {path: 'fp', component: FarePostComponent},
  {path: 'fare', component: FareComponent},
  {path: 'nav', component: NavsComponent},
  {path: 'fl', component: FarePostComponent},
  {path: 'try', component: TryComponent},
  {path: 'pay/:bookingfare', component: PayComponent},
  {path: 's', component: SignupComponent},
  {path: 'l', component: LoginComponent},
  {path: 'p', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
