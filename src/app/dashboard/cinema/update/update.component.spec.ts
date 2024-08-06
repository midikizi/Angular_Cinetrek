import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCinemaComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateCinemaComponent;
  let fixture: ComponentFixture<UpdateCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCinemaComponent]
    });
    fixture = TestBed.createComponent(UpdateCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
