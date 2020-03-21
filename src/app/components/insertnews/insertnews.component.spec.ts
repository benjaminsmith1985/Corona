import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnewsComponent } from './insertnews.component';

describe('InsertnewsComponent', () => {
  let component: InsertnewsComponent;
  let fixture: ComponentFixture<InsertnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
