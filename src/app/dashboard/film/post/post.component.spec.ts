import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFilmComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostFilmComponent;
  let fixture: ComponentFixture<PostFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostFilmComponent]
    });
    fixture = TestBed.createComponent(PostFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
