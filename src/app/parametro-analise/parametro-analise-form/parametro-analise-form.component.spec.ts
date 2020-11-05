import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroAnaliseFormComponent } from './parametro-analise-form.component';

describe('ParametroAnaliseFormComponent', () => {
  let component: ParametroAnaliseFormComponent;
  let fixture: ComponentFixture<ParametroAnaliseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametroAnaliseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroAnaliseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
