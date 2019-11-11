import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKinderComponent } from './list-kinder.component';

describe('ListKinderComponent', () => {
  let component: ListKinderComponent;
  let fixture: ComponentFixture<ListKinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
