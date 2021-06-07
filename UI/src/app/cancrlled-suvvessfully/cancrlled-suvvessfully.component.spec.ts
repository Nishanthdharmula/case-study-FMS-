import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancrlledSuvvessfullyComponent } from './cancrlled-suvvessfully.component';

describe('CancrlledSuvvessfullyComponent', () => {
  let component: CancrlledSuvvessfullyComponent;
  let fixture: ComponentFixture<CancrlledSuvvessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancrlledSuvvessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancrlledSuvvessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
