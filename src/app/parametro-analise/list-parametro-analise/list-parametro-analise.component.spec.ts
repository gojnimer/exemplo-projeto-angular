import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParametroAnaliseComponent } from './list-parametro-analise.component';

describe('ListParametroAnaliseComponent', () => {
  let component: ListParametroAnaliseComponent;
  let fixture: ComponentFixture<ListParametroAnaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParametroAnaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParametroAnaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
