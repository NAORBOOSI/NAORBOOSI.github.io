import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParentsComponent } from './create-parents.component';

describe('CreateParentsComponent', () => {
  let component: CreateParentsComponent;
  let fixture: ComponentFixture<CreateParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
