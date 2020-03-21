import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateheadlineComponent } from './updateheadline.component';

describe('UpdateheadlineComponent', () => {
  let component: UpdateheadlineComponent;
  let fixture: ComponentFixture<UpdateheadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateheadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
