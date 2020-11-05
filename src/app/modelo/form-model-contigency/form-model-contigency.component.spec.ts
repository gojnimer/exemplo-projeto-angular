import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelContigencyComponent } from './form-model-contigency.component';

describe('FormModelContigencyComponent', () => {
  let component: FormModelContigencyComponent;
  let fixture: ComponentFixture<FormModelContigencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModelContigencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModelContigencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
