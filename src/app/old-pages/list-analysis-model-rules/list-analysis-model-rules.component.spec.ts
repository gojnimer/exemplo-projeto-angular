import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnalysisModelRulesComponent } from './list-analysis-model-rules.component';

describe('ListAnalysisModelRulesComponent', () => {
  let component: ListAnalysisModelRulesComponent;
  let fixture: ComponentFixture<ListAnalysisModelRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnalysisModelRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnalysisModelRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
