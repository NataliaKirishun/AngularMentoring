import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let modalService: ModalService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ModalService ],
  }));

  beforeEach(() => {
    modalService = TestBed.get(ModalService);
  });

  it('should be created', () => {
    expect(modalService).toBeTruthy();
  });
});
