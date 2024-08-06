import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectionComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostProjectionComponent;
  let fixture: ComponentFixture<PostProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostProjectionComponent]
    });
    fixture = TestBed.createComponent(PostProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
