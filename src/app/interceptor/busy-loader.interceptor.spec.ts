import { TestBed } from '@angular/core/testing';

import { BusyLoaderInterceptor } from './busy-loader.interceptor';

describe('BusyLoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusyLoaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusyLoaderInterceptor = TestBed.inject(BusyLoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
