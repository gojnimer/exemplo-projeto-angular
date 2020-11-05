import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssociatedProcessModelComponent } from './form-associated-process-model.component';

describe('FormAssociatedProcessModelComponent', () => {
  let component: FormAssociatedProcessModelComponent;
  let fixture: ComponentFixture<FormAssociatedProcessModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAssociatedProcessModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAssociatedProcessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
