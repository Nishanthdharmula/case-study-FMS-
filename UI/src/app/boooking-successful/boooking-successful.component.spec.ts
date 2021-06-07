import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoookingSuccessfulComponent } from './boooking-successful.component';

describe('BoookingSuccessfulComponent', () => {
  let component: BoookingSuccessfulComponent;
  let fixture: ComponentFixture<BoookingSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoookingSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoookingSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
