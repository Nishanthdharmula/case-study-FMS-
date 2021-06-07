import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { FilterPipe } from './filter.pipe';
import { FlightfilterPipe } from './flightfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { BoookingSuccessfulComponent } from './boooking-successful/boooking-successful.component';
import { CancrlledSuvvessfullyComponent } from './cancrlled-suvvessfully/cancrlled-suvvessfully.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerComponent } from './customer/customer.component';
import { PayComponent } from './pay/pay.component';
import { TryComponent } from './try/try.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FareComponent } from './fare/fare.component';
import { FarePostComponent } from './fare-post/fare-post.component';
import { FlightsTableComponent } from './flights-table/flights-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavsComponent } from './navs/navs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlightViewComponent } from './flight-view/flight-view.component'
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent,
    AddFlightComponent,
    LoginFormComponent,
    SearchFlightComponent,
    UpdateFlightComponent,
    HomeComponent,
    LogComponent,
    FilterPipe,
    
    FlightfilterPipe,
    BookingComponent,
    BookingListComponent,
    ReviewComponent,
    ReviewListComponent, 
    BoookingSuccessfulComponent,
    CancrlledSuvvessfullyComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CustomerComponent,
    PayComponent,
    TryComponent,
    FareComponent,
    FarePostComponent,
    FlightsTableComponent,
    NavsComponent,
    FlightViewComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

