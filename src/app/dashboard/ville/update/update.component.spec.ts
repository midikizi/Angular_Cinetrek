import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVilleComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateVilleComponent;
  let fixture: ComponentFixture<UpdateVilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVilleComponent]
    });
    fixture = TestBed.createComponent(UpdateVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
