import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebrowserComponent } from './moviebrowser.component';

describe('MoviebrowserComponent', () => {
  let component: MoviebrowserComponent;
  let fixture: ComponentFixture<MoviebrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviebrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
