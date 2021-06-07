import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref } from '@angular/router';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { FlightService } from './flight.service';
import { FormsModule } from '@angular/forms';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { BookingService } from './booking.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });*/

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('frontend app is running!');
  });
});

/*fdescribe('AppComponent Routing Example', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location: Location;
  let flightService: FlightService;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
        
      ],
      declarations: [
        AppComponent,
        FlightsListComponent,
        LoginComponent,
        ReviewComponent,
        SearchFlightComponent,
        ProfileComponent
      ],
      providers: [
        FlightService, UserService, BookingService, AuthService
      ]
    }).compileComponents();
  });

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    flightService = TestBed.get(FlightService);

    router.initialNavigation();
  });

  it('should test redirect to default path (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      expect(location.path()).toBe('/home');
    });
    
    /*it('should navigate to path when clicked on link(fakeAsync)', fakeAsync(() => {
      fixture.detectChanges();
      let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
      links[1].nativeElement.click();
      tick();
      
        expect(location.path()).toBe('home');
      
  }));
})*/

/*describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)], 
      declarations: [
        HomeComponent,
        SearchFlightComponent,
        AppComponent
      ]
    });

    router = TestBed.get(Router); (2)
    location = TestBed.get(Location); (3)

    fixture = TestBed.createComponent(AppComponent); (4)
    router.initialNavigation(); (5)
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  }));
});*/


