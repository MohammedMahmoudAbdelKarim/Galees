import { TestBed, async, inject } from '@angular/core/testing';

import { SingedUserGuard } from './singed-user.guard';

describe('SingedUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingedUserGuard]
    });
  });

  it('should ...', inject([SingedUserGuard], (guard: SingedUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
