import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelRulesComponent } from './form-model-rules.component';

describe('FormModelRulesComponent', () => {
  let component: FormModelRulesComponent;
  let fixture: ComponentFixture<FormModelRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModelRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
