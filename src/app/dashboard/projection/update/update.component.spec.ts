import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectionComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateProjectionComponent;
  let fixture: ComponentFixture<UpdateProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProjectionComponent]
    });
    fixture = TestBed.createComponent(UpdateProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
