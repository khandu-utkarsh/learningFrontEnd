import { TestBed } from '@angular/core/testing';

import { OpenmeteoWeatherServiceService } from './openmeteo-weather-service.service';

describe('OpenmeteoWeatherServiceService', () => {
  let service: OpenmeteoWeatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenmeteoWeatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
