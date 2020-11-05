import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaModeloComponent } from './consulta-modelo.component';

describe('ConsultaModeloComponent', () => {
  let component: ConsultaModeloComponent;
  let fixture: ComponentFixture<ConsultaModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
