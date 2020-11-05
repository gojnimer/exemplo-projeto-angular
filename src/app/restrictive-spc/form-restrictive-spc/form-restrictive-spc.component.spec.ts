import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRestrictiveSpcComponent } from './form-restrictive-spc.component';

describe('FormRestrictiveSpcComponent', () => {
  let component: FormRestrictiveSpcComponent;
  let fixture: ComponentFixture<FormRestrictiveSpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRestrictiveSpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRestrictiveSpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
