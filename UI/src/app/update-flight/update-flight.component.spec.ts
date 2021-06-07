import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightComponent } from './update-flight.component';

describe('UpdateFlightComponent', () => {
  let component: UpdateFlightComponent;
  let fixture: ComponentFixture<UpdateFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    const fixture = TestBed.createComponent(UpdateFlightComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('module-test-app');
  });
});


