import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatechartComponent } from './updatechart.component';

describe('UpdatechartComponent', () => {
  let component: UpdatechartComponent;
  let fixture: ComponentFixture<UpdatechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
