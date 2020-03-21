import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecaseComponent } from './updatecase.component';

describe('UpdatecaseComponent', () => {
  let component: UpdatecaseComponent;
  let fixture: ComponentFixture<UpdatecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
