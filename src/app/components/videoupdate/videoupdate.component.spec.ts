import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoupdateComponent } from './videoupdate.component';

describe('VideoupdateComponent', () => {
  let component: VideoupdateComponent;
  let fixture: ComponentFixture<VideoupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
