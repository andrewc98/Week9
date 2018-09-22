import { TestBed, inject } from '@angular/core/testing';

import { UpdateProductServiceService } from './update-product-service.service';

describe('UpdateProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateProductServiceService]
    });
  });

  it('should be created', inject([UpdateProductServiceService], (service: UpdateProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});
