import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateFilmComponent;
  let fixture: ComponentFixture<UpdateFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFilmComponent]
    });
    fixture = TestBed.createComponent(UpdateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
