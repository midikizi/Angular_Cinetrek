import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeanceComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostSeanceComponent;
  let fixture: ComponentFixture<PostSeanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSeanceComponent]
    });
    fixture = TestBed.createComponent(PostSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
