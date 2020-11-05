import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFederalRecipeComponent } from './detail-federal-recipe.component';

describe('DetailFederalRecipeComponent', () => {
  let component: DetailFederalRecipeComponent;
  let fixture: ComponentFixture<DetailFederalRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFederalRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFederalRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
