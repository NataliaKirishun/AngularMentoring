import { TestBed } from '@angular/core/testing';

import { LoaderOverlayService } from './loader-overlay.service';

describe('LoaderOverlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderOverlayService = TestBed.get(LoaderOverlayService);
    expect(service).toBeTruthy();
  });
});
