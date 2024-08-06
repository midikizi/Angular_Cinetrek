import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSeanceComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateSeanceComponent;
  let fixture: ComponentFixture<UpdateSeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSeanceComponent]
    });
    fixture = TestBed.createComponent(UpdateSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
