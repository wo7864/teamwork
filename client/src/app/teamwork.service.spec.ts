import { TestBed } from '@angular/core/testing';

import { TeamworkService } from './teamwork.service';

describe('TeamworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamworkService = TestBed.get(TeamworkService);
    expect(service).toBeTruthy();
  });
});
