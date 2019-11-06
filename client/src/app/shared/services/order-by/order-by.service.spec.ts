import { TestBed } from '@angular/core/testing';

import { OrderByService } from './order-by.service';

describe('OrderByService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderByService = TestBed.get(OrderByService);
    expect(service).toBeTruthy();
  });
});
