import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadCompletedComponent } from './video-upload-completed.component';

describe('VideoUploadCompletedComponent', () => {
  let component: VideoUploadCompletedComponent;
  let fixture: ComponentFixture<VideoUploadCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUploadCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
