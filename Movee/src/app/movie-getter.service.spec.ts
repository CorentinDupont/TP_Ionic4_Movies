import { TestBed } from '@angular/core/testing';

import { MovieGetterService } from './movie-getter.service';

describe('MovieGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieGetterService = TestBed.get(MovieGetterService);
    expect(service).toBeTruthy();
  });
});
