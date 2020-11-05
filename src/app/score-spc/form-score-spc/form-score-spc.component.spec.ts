import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormScoreSpcComponent } from './form-score-spc.component';

describe('FormScoreSpcComponent', () => {
  let component: FormScoreSpcComponent;
  let fixture: ComponentFixture<FormScoreSpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormScoreSpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormScoreSpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
