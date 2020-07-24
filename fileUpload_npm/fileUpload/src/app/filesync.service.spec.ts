import { TestBed } from '@angular/core/testing';

import { FilesyncService } from './filesync.service';

describe('FilesyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilesyncService = TestBed.get(FilesyncService);
    expect(service).toBeTruthy();
  });
});
