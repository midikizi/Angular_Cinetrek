import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleComponent } from './ville.component';

describe('VilleComponent', () => {
  let component: VilleComponent;
  let fixture: ComponentFixture<VilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilleComponent]
    });
    fixture = TestBed.createComponent(VilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
