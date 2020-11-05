import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMalaPaComponent } from './form-mala-pa.component';

describe('FormMalaPaComponent', () => {
  let component: FormMalaPaComponent;
  let fixture: ComponentFixture<FormMalaPaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMalaPaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMalaPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
