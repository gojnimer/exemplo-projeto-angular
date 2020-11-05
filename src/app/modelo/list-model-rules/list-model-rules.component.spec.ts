import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModelRulesComponent } from './list-model-rules.component';

describe('ListModelRulesComponent', () => {
  let component: ListModelRulesComponent;
  let fixture: ComponentFixture<ListModelRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModelRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModelRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
