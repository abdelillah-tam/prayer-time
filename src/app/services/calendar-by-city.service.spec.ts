import { TestBed } from '@angular/core/testing';

import { CalendarByCityService } from './calendar-by-city.service';

describe('CalendarByCityService', () => {
  let service: CalendarByCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarByCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
