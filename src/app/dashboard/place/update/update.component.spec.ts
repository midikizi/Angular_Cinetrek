import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlaceComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdatePlaceComponent;
  let fixture: ComponentFixture<UpdatePlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlaceComponent]
    });
    fixture = TestBed.createComponent(UpdatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
