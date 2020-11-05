import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritivoSerasaFormComponent } from './restritivo-serasa-form.component';

describe('RestritivoSerasaFormComponent', () => {
  let component: RestritivoSerasaFormComponent;
  let fixture: ComponentFixture<RestritivoSerasaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestritivoSerasaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestritivoSerasaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
