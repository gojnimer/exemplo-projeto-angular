import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnalysisModelComponent } from './list-analysis-model.component';

describe('ListAnalysisModelComponent', () => {
  let component: ListAnalysisModelComponent;
  let fixture: ComponentFixture<ListAnalysisModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnalysisModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnalysisModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
