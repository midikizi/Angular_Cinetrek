import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTicketComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostTicketComponent;
  let fixture: ComponentFixture<PostTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTicketComponent]
    });
    fixture = TestBed.createComponent(PostTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
