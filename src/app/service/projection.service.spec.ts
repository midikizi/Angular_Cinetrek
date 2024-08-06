import { TestBed } from '@angular/core/testing';

import { ProjectionService } from './projection.service';

describe('ProjectionService', () => {
  let service: ProjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
