import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVideosComponent } from './category-videos.component';

describe('CategoryVideosComponent', () => {
  let component: CategoryVideosComponent;
  let fixture: ComponentFixture<CategoryVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
