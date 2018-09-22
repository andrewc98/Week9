import { TestBed, inject } from '@angular/core/testing';

import { AddProductServiceService } from './add-product-service.service';

describe('AddProductServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProductServiceService]
    });
  });

  it('should be created', inject([AddProductServiceService], (service: AddProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});
