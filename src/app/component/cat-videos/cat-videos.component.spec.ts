import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatVideosComponent } from './cat-videos.component';

describe('CatVideosComponent', () => {
  let component: CatVideosComponent;
  let fixture: ComponentFixture<CatVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
