import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilmComponent } from './show-film.component';

describe('ShowFilmComponent', () => {
  let component: ShowFilmComponent;
  let fixture: ComponentFixture<ShowFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFilmComponent]
    });
    fixture = TestBed.createComponent(ShowFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
