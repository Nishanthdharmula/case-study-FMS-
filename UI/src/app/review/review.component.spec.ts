import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';

/*describe('ReviewComponent', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/





describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing title', () => {
    expect(component.componentName).toBe("review");
  });

});