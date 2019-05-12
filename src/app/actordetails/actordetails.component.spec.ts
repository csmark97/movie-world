import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActordetailsComponent } from './actordetails.component';

describe('ActordetailsComponent', () => {
  let component: ActordetailsComponent;
  let fixture: ComponentFixture<ActordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
