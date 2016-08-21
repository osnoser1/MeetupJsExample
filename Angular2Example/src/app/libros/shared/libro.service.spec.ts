/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from "../../../../node_modules/@angular/core/testing.d";
import { LibroService } from "libro.service";

describe('Service: Libro', () => {
  beforeEach(() => {
    addProviders([LibroService]);
  });

  it('should ...',
    inject([LibroService],
      (service: LibroService) => {
        expect(service).toBeTruthy();
      }));
});
