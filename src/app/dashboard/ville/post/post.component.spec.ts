import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVilleComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostVilleComponent;
  let fixture: ComponentFixture<PostVilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostVilleComponent]
    });
    fixture = TestBed.createComponent(PostVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
