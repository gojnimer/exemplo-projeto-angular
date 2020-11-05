import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionFederalRecipeComponent } from './edition-federal-recipe.component';

describe('EditionFederalRecipeComponent', () => {
  let component: EditionFederalRecipeComponent;
  let fixture: ComponentFixture<EditionFederalRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionFederalRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionFederalRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
