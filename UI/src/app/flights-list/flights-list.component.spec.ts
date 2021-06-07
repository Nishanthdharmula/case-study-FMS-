import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFlightComponent } from '../add-flight/add-flight.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightsListComponent } from './flights-list.component';

/*describe('FlightsListComponent', () => {
  let component: FlightsListComponent;
  let fixture: ComponentFixture<FlightsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h2 tag', () => {
    const h2Ele = fixture.debugElement.query(By.css('h2'));
    expect(h2Ele.nativeElement.textContent).toBe('All Flight')
  });

  it('Should navigate to /add-flight on Add Flight button click',
      () => {
        
        spyOn(router, 'navigateByUrl');
        dh.clickButton('+');
        expect(router.navigateByUrl).
        toHaveBeenCalledWith(router.createUrlTree(['/add-flight']),
          { skipLocationChange: false, replaceUrl: false });
      });


});*/

describe('FlightsListComponent', () => { // 2
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        FlightsListComponent
      ],
    }).compileComponents();
  });
 
  it('should render title in a h2 tag', () => { //6
    const fixture = TestBed.createComponent(FlightsListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('All Flight');
  });
});

describe('FlightsListComponent (integrated test)', () => {
  let component: FlightsListComponent;
  let fixture: ComponentFixture<FlightsListComponent>;
  let router: Router;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FlightsListComponent, AddFlightComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents(); // This is not needed if you are in the CLI context
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsListComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should trigger the navigation to `/add-flight`', async () => {
    const link = fixture.debugElement.nativeElement.querySelector('.add-flight-link');

    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  /*it('should trigger the navigation to `/about`', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.about-link');

    link.click();

    expect(router.navigateByUrl).toHaveBeenCalled();
  }));*/
});

