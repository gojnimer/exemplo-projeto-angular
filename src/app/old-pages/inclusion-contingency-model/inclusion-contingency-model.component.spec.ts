import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionContingencyModelComponent } from './inclusion-contingency-model.component';

describe('InclusionContingencyModelComponent', () => {
  let component: InclusionContingencyModelComponent;
  let fixture: ComponentFixture<InclusionContingencyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionContingencyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionContingencyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
