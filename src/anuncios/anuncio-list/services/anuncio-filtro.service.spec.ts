import { TestBed } from '@angular/core/testing';

import { AnuncioFiltroService } from './anuncio-filtro.service';

describe('AnuncioFiltroService', () => {
  let service: AnuncioFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuncioFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
