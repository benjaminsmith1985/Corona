import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsitemsComponent } from './newsitems.component';

describe('NewsitemsComponent', () => {
  let component: NewsitemsComponent;
  let fixture: ComponentFixture<NewsitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
