import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSalleComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostSalleComponent;
  let fixture: ComponentFixture<PostSalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSalleComponent]
    });
    fixture = TestBed.createComponent(PostSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
