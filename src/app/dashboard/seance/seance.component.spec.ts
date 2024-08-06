import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceComponent } from './seance.component';

describe('SeanceComponent', () => {
  let component: SeanceComponent;
  let fixture: ComponentFixture<SeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeanceComponent]
    });
    fixture = TestBed.createComponent(SeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
