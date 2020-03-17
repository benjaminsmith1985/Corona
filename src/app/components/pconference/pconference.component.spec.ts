import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PconferenceComponent } from './pconference.component';

describe('PconferenceComponent', () => {
  let component: PconferenceComponent;
  let fixture: ComponentFixture<PconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
