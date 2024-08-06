import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponentProjection } from './show.component';

describe('ShowComponent', () => {
  let component: ShowComponentProjection;
  let fixture: ComponentFixture<ShowComponentProjection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowComponentProjection]
    });
    fixture = TestBed.createComponent(ShowComponentProjection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
