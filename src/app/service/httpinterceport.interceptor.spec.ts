import { TestBed } from '@angular/core/testing';

import { HttpinterceportInterceptor } from './httpinterceport.interceptor';

describe('HttpinterceportInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpinterceportInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpinterceportInterceptor = TestBed.inject(HttpinterceportInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
