import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestritiveSerasaComponent } from './list-restritive-serasa.component';

describe('ListRestritiveSerasaComponent', () => {
  let component: ListRestritiveSerasaComponent;
  let fixture: ComponentFixture<ListRestritiveSerasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRestritiveSerasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestritiveSerasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
