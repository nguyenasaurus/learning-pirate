import { TestBed } from '@angular/core/testing';

import { LearningDesignService } from './learning-design.service';

describe('LearningDesignService', () => {
  let service: LearningDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
