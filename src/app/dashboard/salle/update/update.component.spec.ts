import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalleComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateSalleComponent;
  let fixture: ComponentFixture<UpdateSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSalleComponent]
    });
    fixture = TestBed.createComponent(UpdateSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
