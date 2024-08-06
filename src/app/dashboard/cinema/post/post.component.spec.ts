import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCinemaComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostCinemaComponent;
  let fixture: ComponentFixture<PostCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCinemaComponent]
    });
    fixture = TestBed.createComponent(PostCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
