import { TestBed } from '@angular/core/testing';

import { StudentProfilService } from './student-profil.service';

describe('StudentProfilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentProfilService = TestBed.get(StudentProfilService);
    expect(service).toBeTruthy();
  });
});
