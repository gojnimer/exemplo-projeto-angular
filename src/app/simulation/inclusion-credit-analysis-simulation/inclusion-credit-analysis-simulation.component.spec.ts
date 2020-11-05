import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionCreditAnalysisSimulationComponent } from './inclusion-credit-analysis-simulation.component';

describe('InclusionCreditAnalysisSimulationComponent', () => {
  let component: InclusionCreditAnalysisSimulationComponent;
  let fixture: ComponentFixture<InclusionCreditAnalysisSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionCreditAnalysisSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionCreditAnalysisSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
