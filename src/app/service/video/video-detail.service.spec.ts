import { TestBed } from '@angular/core/testing';

import { VideoDetailService } from './video-detail.service';

describe('VideoDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoDetailService = TestBed.get(VideoDetailService);
    expect(service).toBeTruthy();
  });
});
