import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarePostComponent } from './fare-post.component';

describe('FarePostComponent', () => {
  let component: FarePostComponent;
  let fixture: ComponentFixture<FarePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
