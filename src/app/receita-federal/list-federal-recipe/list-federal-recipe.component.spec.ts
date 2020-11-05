import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFederalRecipeComponent } from './list-federal-recipe.component';

describe('ListFederalRecipeComponent', () => {
  let component: ListFederalRecipeComponent;
  let fixture: ComponentFixture<ListFederalRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFederalRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFederalRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
