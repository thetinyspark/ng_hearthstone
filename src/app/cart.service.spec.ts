import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { configTestingModule } from './module.config.test';

describe('CartService', () => {
  let service: CartService;

  beforeEach(configTestingModule);
  
  beforeEach(() => {
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
