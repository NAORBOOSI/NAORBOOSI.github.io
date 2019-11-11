import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderComponent } from './kinder.component';

describe('KinderComponent', () => {
  let component: KinderComponent;
  let fixture: ComponentFixture<KinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
