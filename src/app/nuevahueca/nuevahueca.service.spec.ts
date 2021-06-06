import { TestBed } from '@angular/core/testing';

import { NuevahuecaService } from './nuevahueca.service';

describe('NuevahuecaService', () => {
  let service: NuevahuecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevahuecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
