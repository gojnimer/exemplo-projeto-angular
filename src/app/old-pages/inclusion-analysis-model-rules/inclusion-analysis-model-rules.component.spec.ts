import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionAnalysisModelRulesComponent } from './inclusion-analysis-model-rules.component';

describe('InclusionAnalysisModelRulesComponent', () => {
  let component: InclusionAnalysisModelRulesComponent;
  let fixture: ComponentFixture<InclusionAnalysisModelRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionAnalysisModelRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionAnalysisModelRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
