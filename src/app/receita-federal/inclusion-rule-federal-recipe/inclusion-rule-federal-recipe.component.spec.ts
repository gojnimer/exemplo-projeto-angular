import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionRuleFederalRecipeComponent } from './inclusion-rule-federal-recipe.component';

describe('InclusionRuleFederalRecipeComponent', () => {
  let component: InclusionRuleFederalRecipeComponent;
  let fixture: ComponentFixture<InclusionRuleFederalRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusionRuleFederalRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionRuleFederalRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
